import React from "react";
import firebase from '../firebase';
import './Header.scss'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        // firebase.auth().onAuthStateChanged(user => {
        //     if (user) {
        //         this.props.sessionAction(user.email)

        //     }
        // })
    }
    render() {
        return (
            <div className="footer">
                <div className="fusion-footer">
                    <footer className="fusion-footer-widget-area fusion-widget-area">
                        <div className="fusion-row">
                            <div className="fusion-columns fusion-columns-4 fusion-widget-area">
                                <div className="fusion-column col-lg-3 col-md-3 col-sm-3">
                                    <section id="nav_menu-2" className="fusion-footer-widget-column widget widget_nav_menu"><h4 className="widget-title">สินค้าและบริการ</h4><div className="menu-footer01-container"><ul id="menu-footer01" className="menu"><li id="menu-item-1764" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-1764"><a href="https://www.huasengheng.com/#goldprice">ราคาทองคำล่าสุด</a></li>
                                        <li id="menu-item-4298" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4298"><a href="https://www.huasengheng.com/gold-bar96-5">ทองคำแท่ง 96.5%</a></li>
                                        <li id="menu-item-1335" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1335"><a href="https://www.huasengheng.com/gold-bar/gold-bar-99-99">ทองคำแท่ง 99.99%</a></li>
                                        <li id="menu-item-53" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-53"><a href="https://www.huasengheng.com/product-gold">ทองรูปพรรณ</a></li>
                                        <li id="menu-item-52" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-52"><a href="https://www.huasengheng.com/goldsaver">ออมทอง</a></li>
                                        <li id="menu-item-51" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51"><a href="https://www.huasengheng.com/derivatives">ตราสารอนุพันธ์</a></li>
                                        <li id="menu-item-4321" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4321"><a href="https://www.huasengheng.com/derivatives/#derivatives">กองทุนรวม</a></li>
                                    </ul></div><div style={{ clear: 'both' }} /></section>																					</div>
                                <div className="fusion-column col-lg-3 col-md-3 col-sm-3">
                                    <section id="nav_menu-4" className="fusion-footer-widget-column widget widget_nav_menu"><h4 className="widget-title">ข่าวและบทวิเคราะห์</h4><div className="menu-footer02-container"><ul id="menu-footer02" className="menu"><li id="menu-item-1638" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1638"><a href="https://www.huasengheng.com/archives/category/review">บทวิเคราะห์</a></li>
                                        <li id="menu-item-1554" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1554"><a href="https://www.huasengheng.com/archives/category/video-analysis">วีดีโอบทวิเคราะห์</a></li>
                                        <li id="menu-item-1639" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1639"><a href="https://www.huasengheng.com/archives/category/economy-news">ข่าวเศรษฐกิจ</a></li>
                                    </ul></div><div style={{ clear: 'both' }} /></section>																					</div>
                                <div className="fusion-column col-lg-3 col-md-3 col-sm-3">
                                    <section id="nav_menu-5" className="fusion-footer-widget-column widget widget_nav_menu"><h4 className="widget-title">กิจกรรมประชาสัมพันธ์</h4><div className="menu-footer03-container"><ul id="menu-footer03" className="menu"><li id="menu-item-67" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-67"><a href="https://www.huasengheng.com/archives/category/promotion">โปรโมชั่นและสินค้าใหม่</a></li>
                                        <li id="menu-item-6694" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6694"><a href="https://www.huasengheng.com/archives/category/event">กิจกรรมและประชาสัมพันธ์</a></li>
                                    </ul></div><div style={{ clear: 'both' }} /></section>																					</div>
                                <div className="fusion-column fusion-column-last col-lg-3 col-md-3 col-sm-3">
                                    <section id="media_image-2" className="fusion-footer-widget-column widget widget_media_image"><h4 className="widget-title">เกี่ยวกับเรา</h4><img width={257} height={66} src="https://www.huasengheng.com/wp-content/uploads/2017/10/logo-footer-e1507906832149.png" className="image wp-image-58  attachment-full size-full" alt="" style={{ maxWidth: '100%', height: 'auto' }} srcSet="https://www.huasengheng.com/wp-content/uploads/2017/10/logo-footer-e1507906832149-200x51.png 200w, https://www.huasengheng.com/wp-content/uploads/2017/10/logo-footer-e1507906832149.png 257w" sizes="(max-width: 257px) 100vw, 257px" pagespeed_url_hash={1525717636} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" /><div style={{ clear: 'both' }} /></section><section id="text-6" className="fusion-footer-widget-column widget widget_text">			<div className="textwidget"><table cellPadding="5px">
                                        <tbody>
                                            <tr>
                                                <td><img className="alignnone size-full wp-image-11038" src="https://www.huasengheng.com/wp-content/uploads/2018/07/phone-white.png" alt="" width={37} height={37} pagespeed_url_hash={3096533097} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" /></td>
                                                <td><span style={{ fontSize: '22pt' }}><strong><span style={{ fontFamily: '"Work Sans"', fontWeight: '"600"', fontColor: '"#ffffff" !important' }}>02 225 0202</span></strong></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                        <div style={{ clear: 'both' }} /></section><section id="nav_menu-3" className="fusion-footer-widget-column widget widget_nav_menu"><div className="menu-footer04-container"><ul id="menu-footer04" className="menu"><li id="menu-item-56" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56"><a href="https://www.huasengheng.com/about">ประวัติ</a></li>
                                            <li id="menu-item-55" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55"><a href="https://www.huasengheng.com/contact">ติดต่อเรา/ Contact us</a></li>
                                            <li id="menu-item-1771" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1771"><a href="https://www.huasengheng.com/contact/join_us">ร่วมงานกับเรา</a></li>
                                        </ul></div><div style={{ clear: 'both' }} /></section><section id="custom_html-2" className="widget_text fusion-footer-widget-column widget widget_custom_html"><div className="textwidget custom-html-widget"><table cellPadding="5px">
                                            <tbody>
                                                <tr>
                                                    <td><a href="https://itunes.apple.com/th/app/hsh-trade/id512165119?l=th&mt=8"><img className="size-full wp-image-59 aligncenter" src="https://www.huasengheng.com/wp-content/uploads/2017/10/downloadapp-ios.png" alt="" width={127} height={38} pagespeed_url_hash={1907922437} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" /></a></td>
                                                    <td><a href="https://play.google.com/store/apps/details?id=com.huasengheng.goldtrade.online96" target="_blank" rel="noopener noreferrer"><img className="size-full wp-image-60 aligncenter" src="https://www.huasengheng.com/wp-content/uploads/2017/10/downloadapp-android.png" alt="" width={129} height={38} pagespeed_url_hash={2477714391} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" /></a></td>
                                                </tr>
                                            </tbody>
                                        </table></div><div style={{ clear: 'both' }} /></section>																					</div>
                                <div className="fusion-clearfix" />
                            </div> {/* fusion-columns */}
                        </div> {/* fusion-row */}
                    </footer> {/* fusion-footer-widget-area */}
                    <footer id="footer" className="fusion-footer-copyright-area">
                        <div className="fusion-row">
                            <div className="fusion-copyright-content">
                                <div className="fusion-copyright-notice">
                                    <div>
                                        <span style={{ fontFamily: 'helvetica, arial, sans-serif' }}>Copyright 2017 HUA SENG HENG CO.,LTD. All rights reserved.</span>	</div>
                                </div>
                                <div className="fusion-social-links-footer">
                                    <div className="fusion-social-networks boxed-icons"><div className="fusion-social-networks-wrapper"><a className="fusion-social-network-icon fusion-tooltip fusion-facebook fusion-icon-facebook" style={{}} href="https://www.facebook.com/hshsocial" target="_blank" rel="noopener noreferrer" data-placement="top" data-title="Facebook" data-toggle="tooltip" title data-original-title="Facebook"><span className="screen-reader-text">Facebook</span></a><a className="custom fusion-social-network-icon fusion-tooltip fusion-custom fusion-icon-custom" style={{ position: 'relative' }} href="http://line.me/ti/p/%40hshsocial" target="_blank" rel="noopener noreferrer" data-placement="top" data-title="Line Official" data-toggle="tooltip" title data-original-title="Line Official"><span className="screen-reader-text">Line Official</span><img src="https://www.huasengheng.com/wp-content/uploads/2017/10/line-icon.png" style={{ width: 'auto' }} alt="Line Official" pagespeed_url_hash={148890558} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" /></a><a className="fusion-social-network-icon fusion-tooltip fusion-youtube fusion-icon-youtube" style={{}} href="https://www.youtube.com/user/hshfutures1" target="_blank" rel="noopener noreferrer" data-placement="top" data-title="YouTube" data-toggle="tooltip" title data-original-title="YouTube"><span className="screen-reader-text">YouTube</span></a><a className="fusion-social-network-icon fusion-tooltip fusion-instagram fusion-icon-instagram" style={{}} href="https://www.instagram.com/hshsocial/" target="_blank" rel="noopener noreferrer" data-placement="top" data-title="Instagram" data-toggle="tooltip" title data-original-title="Instagram"><span className="screen-reader-text">Instagram</span></a></div></div></div>
                            </div> {/* fusion-fusion-copyright-content */}
                        </div> {/* fusion-row */}
                    </footer> {/* #footer */}
                </div>
            </div>
        )
    }
}

export default Header;