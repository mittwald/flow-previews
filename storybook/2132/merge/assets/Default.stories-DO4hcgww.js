import{j as r,r as f}from"./iframe-Bl9ZNzly.js";import{s as o,g as z}from"./TimeField-B_NJ8Ky6.js";import{L as R}from"./Label-DNzUxKIf.js";import{B as b}from"./Button-C43dgBgP.js";import{S as x}from"./Section-CDNuzGQn.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-DcJmUF2I.js";import"./mergeRefs-ux46nP0M.js";import"./index-BGoG8N2m.js";import"./clsx-B-dksMZM.js";import"./utils-Ba3Wc4Cj.js";import"./Accordion-BUjWPilm.js";import"./dynamic-DN5dqmlD.js";import"./IconWarning-CdD_Vr9D.js";import"./ActionGroup-B7w-C4eg.js";import"./getActionGroupSlot-BTnOUAI3.js";import"./useStatic-CHy8y9O8.js";import"./Alert-C0kR42rQ.js";import"./AlertIcon-CHB7dkgT.js";import"./useLocalizedStringFormatter-IXeJde12.js";import"./context-BsRR-XG9.js";import"./AlertBadge-D4s5aIEX.js";import"./Text-DVbVn-gX.js";import"./browser-DgAJHjYP.js";import"./EmulatedBoldText-C2RodUkO.js";import"./Align-CpM0_uVF.js";import"./Popover-B6t3DWPA.js";import"./context-B3t2ll3v.js";import"./Button-CmlWxNPG.js";import"./ProgressBar-D1AHMkFy.js";import"./Hidden-B2JOjUUO.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DOvKN8uX.js";import"./useFocusable-JrbUxoa4.js";import"./RSPContexts-CKPxvq-y.js";import"./Collection-2c0i4EEE.js";import"./CollectionBuilder-BRsb4ZNp.js";import"./SelectionIndicator-FRTj7WMW.js";import"./Separator-E4Y45gOI.js";import"./OverlayTrigger-DDLdbzyu.js";import"./TableFooterRow-DMeEteug.js";import"./SkeletonText-CN7sz2xZ.js";import"./Avatar-BbmMq3FT.js";import"./AvatarStack-B2yM02yc.js";import"./Badge-9mW_yPuD.js";import"./BigNumber-DoG3YCKA.js";import"./Breadcrumb-Cp2zriY7.js";import"./Link-5zhhGX89.js";import"./Heading-6r91OnV5.js";import"./Legend-DkfP-nrK.js";import"./FileCardList-Cz5qlLht.js";import"./Image-CXwyLNTy.js";import"./Color-DNqf-ZTv.js";import"./Content-C5jzPnX3.js";import"./ContextualHelpTrigger-ckkh_Rgl.js";import"./CounterBadge-D8ojNEaL.js";import"./DonutChart-CwEutUfZ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-LspQ7VGl.js";import"./Header-BkQqDlqE.js";import"./Initials-I4jIDVmP.js";import"./InlineCode-B5iqyuuQ.js";import"./PopoverTrigger-DSjKq8wS.js";import"./LoadingSpinner-BmMjYWfH.js";import"./Separator-Cyan_bJo.js";import"./Message-CFIx3glm.js";import"./MessageSeparator-BMRRM_XG.js";import"./NavigationGroup-Dk3SJKPd.js";import"./Notification-CB0idSLS.js";import"./NotificationProvider-CofHTDPs.js";import"./ProgressBar-Btc4VOSd.js";import"./Rating-AGxiWe12.js";import"./Skeleton-Bm0zXdSH.js";const _r={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,inputRef:t,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
        <MarkdownEditor {...props} inputRef={editorRef}>
          <Label>Message</Label>
        </MarkdownEditor>
        <Button type="button" onClick={handleFocus}>
          Set focus
        </Button>
      </Section>;
  }
}`,...h.parameters?.docs?.source}}};const qr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,qr as __namedExportsOrder,_r as default};
