import{j as r,r as f}from"./iframe-CVdzphmp.js";import{t as o,F as z}from"./Modal-dLKFywtU.js";import{L as R}from"./Label-BcwsyfCE.js";import{B as b}from"./Button-Cy2rd34B.js";import{S as x}from"./Section-DtrIGiG-.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-D15r1Yxg.js";import"./flowComponent-CzVecZL_.js";import"./index-DhI8Ssxe.js";import"./index-XbyfyjmF.js";import"./context-B-mwp0vS.js";import"./Button-CTZeRvkz.js";import"./utils-CFM6TLUG.js";import"./ProgressBar-1X1fHZT0.js";import"./Hidden-Dt0LCI07.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BRBaLiQc.js";import"./useFocusRing-BvvALaA3.js";import"./useFocusable-By55uwCe.js";import"./RSPContexts-DDuv6DrT.js";import"./Collection-D1raa_37.js";import"./CollectionBuilder-D0Q13mlX.js";import"./SelectionIndicator-wxrHnCmJ.js";import"./Separator-DMedQabI.js";import"./browser-NAvxjlqe.js";import"./useLocalizedStringFormatter-DSC0kUTs.js";import"./useStatic-CTNvYRV_.js";import"./FileCardList-CelLg_wh.js";import"./IconWarning-Dqi9ABql.js";import"./Avatar-5by9MeQI.js";import"./AlertIcon-Xp4f2JBr.js";import"./Image-C129SSb1.js";import"./Text-Bkok2Uad.js";import"./EmulatedBoldText-Buf1io-r.js";import"./Link-DafBlrAX.js";import"./ControlledNotification-Cxvk1MBM.js";import"./LoadingSpinner-DTzlaVu1.js";import"./Flex-CXweaQA0.js";import"./Accordion-CII8tjDR.js";import"./ActionGroup-CWQpjp5Z.js";import"./Alert-CxRF3ICH.js";import"./AlertBadge-g5AIFmAM.js";import"./Align-D1ekpy-F.js";import"./AvatarStack-gtLPvBlC.js";import"./BigNumber-DDAMaBcj.js";import"./Breadcrumb-D6jlLVdK.js";import"./Heading-DzvfYRfV.js";import"./Legend-Ch6lQmnj.js";import"./Color-bOvY6mSn.js";import"./TableFooterRow-BNbzk5NJ.js";import"./SkeletonText-CyW34AgL.js";import"./Content-DxRrX9zb.js";import"./CounterBadge-CKtsFS1H.js";import"./DonutChart-BqUMdaQw.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Y2YDUvsA.js";import"./Header-cd3ubJu7.js";import"./Initials-8P49ASMZ.js";import"./InlineCode-ClEEVqRB.js";import"./LayoutCard-DFxi45F0.js";import"./Separator-BfdYcmQH.js";import"./MessageSeparator-CuotSqOA.js";import"./NavigationGroup-CEF9lIWg.js";import"./Notification-3G2vZj4A.js";import"./NotificationProvider-BuTudFPl.js";import"./ProgressBar-Cb_NqQgZ.js";import"./Rating-D1vk6HX_.js";import"./Skeleton-DCmfrDd3.js";const Ir={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},c={args:{rows:1,autoResizeMaxRows:5}},m={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "horizontal"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical",
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: props => {
    const editorRef = useRef<HTMLTextAreaElement | null>(null);
    const handleFocus = () => {
      if (editorRef.current) {
        editorRef.current.focus();
      }
    };
    return <Section>
        <MarkdownEditor {...props} ref={editorRef}>
          <Label>Message</Label>
        </MarkdownEditor>
        <Button type="button" onClick={handleFocus}>
          Set focus
        </Button>
      </Section>;
  }
}`,...h.parameters?.docs?.source}}};const Hr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{c as AutoResizeable,t as Default,a as Disabled,l as HorizontallyResizeable,m as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Hr as __namedExportsOrder,Ir as default};
