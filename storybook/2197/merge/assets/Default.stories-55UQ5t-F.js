import{j as r,r as f}from"./iframe-BDeBfZSP.js";import{r as o,g as z}from"./TimeField-Ne-c5KEy.js";import{L as R}from"./Label-B1LspQ1T.js";import{B as b}from"./Button-Dbhe5AA0.js";import{S as x}from"./Section-D09FbpBR.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-CInYH9Sb.js";import"./mergeRefs-Dw41Nq7Z.js";import"./index-CAU0MqbG.js";import"./clsx-B-dksMZM.js";import"./Accordion-CKUe20wM.js";import"./dynamic-BIVuw2Q_.js";import"./IconWarning-CWBVghBS.js";import"./ActionGroup-BjwLyGgZ.js";import"./Alert-CPr2bDJb.js";import"./AlertIcon-CVet0SZ9.js";import"./useLocalizedStringFormatter-QrEcyOeW.js";import"./context-CmX5Cpay.js";import"./AlertBadge-rZGJwZqq.js";import"./Text-DwrK8QpO.js";import"./browser--C_mCO56.js";import"./utils-Byz_563U.js";import"./EmulatedBoldText-3F_0W9mf.js";import"./Align-Bqyqg49a.js";import"./Popover-DNzPOg2i.js";import"./context-DWFXzaDB.js";import"./Button-Cfa7dut0.js";import"./ProgressBar-W0aWvyTc.js";import"./Hidden-D2v2aeTK.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-508WtmVR.js";import"./useFocusable-DTnDWSdy.js";import"./RSPContexts-BBQghKHL.js";import"./Collection-l4IMJ13J.js";import"./CollectionBuilder-CCh6UYnS.js";import"./SelectionIndicator-uDzrcrA1.js";import"./Separator-mHu8Ln7W.js";import"./useStatic-CE8Y1Vmb.js";import"./OverlayTrigger-C0iwpCUS.js";import"./TableFooterRow-2U0_8Mem.js";import"./SkeletonText-BtXDjmAi.js";import"./Avatar-D2htOkNN.js";import"./AvatarStack-1PEAciH2.js";import"./Badge-KSMEjVCc.js";import"./BigNumber-BBSlAdO3.js";import"./Breadcrumb-B8GN1fPd.js";import"./Link-Bw9pb0v5.js";import"./Heading-iyX9InFB.js";import"./Legend-BNJwDcp9.js";import"./FileCardList-BChVNWmo.js";import"./Image-3Q6tO5T-.js";import"./Color-C5PdvckB.js";import"./Content-BA1XxLMk.js";import"./ContextualHelpTrigger-BB5lI167.js";import"./CounterBadge-ClD-eDBX.js";import"./DonutChart-irBs7pBN.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-JTtbrcXh.js";import"./Header-CGMIJvRh.js";import"./Initials-CKWxINwR.js";import"./InlineCode-D_o1vB8f.js";import"./PopoverTrigger-GXKodTVP.js";import"./LoadingSpinner-BWJul6BV.js";import"./Separator-B12pwKUV.js";import"./Message-Ct2DG7ID.js";import"./MessageSeparator-xtwtWMZH.js";import"./NavigationGroup-D4eFLegf.js";import"./Notification-lKPeWo9E.js";import"./NotificationProvider-sogPUx6w.js";import"./ProgressBar-CSjgGiiD.js";import"./Rating-FVo5ZswU.js";import"./Skeleton-CCjm6q3C.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
        <MarkdownEditor {...props} ref={editorRef}>
          <Label>Message</Label>
        </MarkdownEditor>
        <Button type="button" onClick={handleFocus}>
          Set focus
        </Button>
      </Section>;
  }
}`,...h.parameters?.docs?.source}}};const _r=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,t as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,_r as __namedExportsOrder,Tr as default};
