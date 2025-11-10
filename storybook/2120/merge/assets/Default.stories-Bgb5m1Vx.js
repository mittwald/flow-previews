import{j as r,r as f}from"./iframe-BFS0V-7K.js";import{m as o,F as z}from"./Modal-BFATeJko.js";import{L as R}from"./Label-B5VHziHb.js";import{B as b}from"./Button-C69BF7uv.js";import{S as x}from"./Section-jBZNhjEq.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-D6nHDIyd.js";import"./flowComponent-DYDr2Yry.js";import"./index-BLI0rWKp.js";import"./index-Cd8SiJSJ.js";import"./Popover-CRv5SMSH.js";import"./context-B7YXRHOK.js";import"./useStatic-5zK4mpNm.js";import"./OverlayTrigger-DB1HvpAI.js";import"./Dialog-Cj7jIBKp.js";import"./Button-C0SUbguZ.js";import"./utils-pBfQtTJP.js";import"./ProgressBar-DZnnPhpU.js";import"./Hidden-459sOV2x.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CL-MWO-e.js";import"./useFocusRing-CM3Y5p4v.js";import"./useFocusable-DIP3xdGA.js";import"./RSPContexts-vmNR8Bdo.js";import"./OverlayArrow-BWg220ZF.js";import"./useControlledState-CfZCIixa.js";import"./Collection-BNdUYhId.js";import"./CollectionBuilder-oqPeank5.js";import"./SelectionIndicator-C95FoYBz.js";import"./Separator-DyL-chbW.js";import"./browser-DkyXecm8.js";import"./useLocalizedStringFormatter-Bsp3ptWs.js";import"./ControlledNotification-CqVYbY5l.js";import"./ClearPropsContextView-M-FcIVZm.js";import"./LoadingSpinner-Bnd8iTGA.js";import"./IconWarning-BzBGzmgt.js";import"./LayoutCard-DliVh_Cq.js";import"./Accordion-BN1AeHiU.js";import"./Action-BkvOgHYi.js";import"./getActionGroupSlot-B8sKJhlM.js";import"./ActionGroup-DX0lhxHa.js";import"./Alert-CkAVzfTa.js";import"./AlertIcon-BSK9BpjA.js";import"./AlertBadge--nGlaEDG.js";import"./Text-Cg-PlNpB.js";import"./EmulatedBoldText-DZMpoDwy.js";import"./Align-Csa9WLSq.js";import"./TableFooterRow-z-Vp4lH_.js";import"./SkeletonText-DNF0wxcf.js";import"./Avatar-DCVki-tG.js";import"./AvatarStack-dSGbniWM.js";import"./Badge-B1T0t0bU.js";import"./BigNumber-DC_XM9ko.js";import"./Breadcrumb-BmXdRJ_S.js";import"./Link-obEopwrC.js";import"./Heading-DljESEje.js";import"./Legend-BgcSabyE.js";import"./FileCardList-BLwhGj5a.js";import"./Image-4xzJyRg6.js";import"./CodeBlock-BMPK3aC9.js";import"./CopyButton-Dspux94x.js";import"./Tooltip-DdLAAoPW.js";import"./react-children-utilities-BhgYEgbL.js";import"./Color-Bkxy1GQb.js";import"./Content-CWdQm9SB.js";import"./ContextualHelpTrigger-1bZdijhA.js";import"./CounterBadge-COopACRP.js";import"./DonutChart-C1kyimoM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CGzqTGDI.js";import"./Header-r0BkDezu.js";import"./Initials-DrCrYU8v.js";import"./InlineCode-BwCrq_Tn.js";import"./LabeledValue-m8r6nqGA.js";import"./PopoverTrigger-DwJ_YWVm.js";import"./Markdown-Dlb8-Jwc.js";import"./Separator-DMn5BSHW.js";import"./Message-BUhJcMSM.js";import"./MessageSeparator-Jfq9TQuP.js";import"./NavigationGroup-YgTh9AiK.js";import"./Notification-DVeBahUP.js";import"./NotificationProvider-CODhhIwr.js";import"./ProgressBar-CxCN6ejE.js";import"./Rating-CTf8YM4g.js";import"./Skeleton-f-vyEhot.js";const re={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,inputRef:t,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const ee=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,ee as __namedExportsOrder,re as default};
