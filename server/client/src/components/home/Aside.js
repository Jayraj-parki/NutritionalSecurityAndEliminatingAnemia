import React from 'react'
import style from "../css/home/Aside.module.scss"
export default function LeftData() {
    return (
        <>
            <table className={style.normal_value+ " table caption-top "}>
                <caption className="">Normal Values <br/>(No Anaemia)</caption>
                <thead>
                    <tr>
                        <th scope="col">Category Values</th>
                        <th scope="col">Refrences</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>Men</td>
                        <td> &gt; 13 g/dl</td>
                    </tr>
                    <tr>
                        <td>Women</td>
                        <td>&gt; 12 g/dl</td>
                    </tr>
                    <tr>
                        <td>Pregnent Women</td>
                        <td>&gt; 11 g/dl</td>
                    </tr>
                    <tr>
                        <td>Infants from 2-6 months</td>
                        <td>&gt; 9.5 g/dl</td>
                    </tr>
                    <tr>
                        <td>Children from 6-24 months</td>
                        <td>&gt; 10.5 g/dl</td>
                    </tr>
                    <tr>
                        <td>2 years to 11 years</td>
                        <td>&gt; 11.5 g/dl</td>
                    </tr>
                    <tr>
                        <td>Children from 12 years</td>
                        <td>&gt; p13 g/dl</td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}
