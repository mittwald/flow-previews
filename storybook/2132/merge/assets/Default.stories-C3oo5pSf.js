import{j as r,r as f}from"./iframe-DTBy15H7.js";import{r as o,g as z}from"./TimeField-C25JplCF.js";import{L as R}from"./Label-DjwrD9Fk.js";import{B as b}from"./Button-QHOz67K3.js";import{S as x}from"./Section-CTt0hPdU.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-Fi7tnu-J.js";import"./mergeRefs-CWVC3DZq.js";import"./index-C9i3V5R3.js";import"./clsx-B-dksMZM.js";import"./Accordion-DnPtHmZG.js";import"./dynamic-CCPexUYC.js";import"./IconWarning-Djz7NATM.js";import"./ActionGroup-BXdOYEdg.js";import"./Alert-QdSgDx1T.js";import"./AlertIcon-B0N13FEc.js";import"./useLocalizedStringFormatter-C6mCvBeu.js";import"./context-DDV21Rg9.js";import"./AlertBadge-8jy2QUL6.js";import"./Text-Bj8vPlc0.js";import"./browser-MW83o6M0.js";import"./utils-Dl3W8pzT.js";import"./EmulatedBoldText-Dvqrfp28.js";import"./Align-DQZB8NzV.js";import"./Popover-7hNwjNSl.js";import"./context-DioYia5p.js";import"./Button-BYfJcV7w.js";import"./ProgressBar-BPzzwKl5.js";import"./Hidden-CGEKkcWL.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DZNjyW13.js";import"./useFocusable-C5o0miI6.js";import"./RSPContexts-DH-gZpq1.js";import"./Collection-D1XcVqi_.js";import"./CollectionBuilder-C71l8wdj.js";import"./SelectionIndicator-CxONpiWv.js";import"./Separator-CSQG4MPx.js";import"./useStatic-eHzIFJyj.js";import"./OverlayTrigger-ZFUPrMkD.js";import"./TableFooterRow-CtpRNrqi.js";import"./SkeletonText-DpsupKVa.js";import"./Avatar-BILpTm5T.js";import"./AvatarStack-CUiO0Zcy.js";import"./Badge-CT04WDK1.js";import"./BigNumber-BCtBSLB-.js";import"./Breadcrumb-B6l_HQxY.js";import"./Link-CxbSfmHB.js";import"./Heading-Ca-tELgf.js";import"./Legend-Bpj9sjZW.js";import"./FileCardList-39D8aOFP.js";import"./Image-MOe90XqG.js";import"./Color-ClQVjgLv.js";import"./Content-Dlpa9xN1.js";import"./ContextualHelpTrigger-BRKcFrI9.js";import"./CounterBadge-12ncM8Mc.js";import"./DonutChart-CLp4EYV9.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-7vWoxhWM.js";import"./Header-DBPOtdGg.js";import"./Initials-aSFKpGEw.js";import"./InlineCode-_CBCXquU.js";import"./PopoverTrigger-BD_9xpzq.js";import"./LoadingSpinner-CRyT1UDC.js";import"./Separator-B_RuElQr.js";import"./Message-C0AuzCP0.js";import"./MessageSeparator-Bf9oDxzN.js";import"./NavigationGroup-BiQENMNY.js";import"./Notification-wHOEjy82.js";import"./NotificationProvider-B2b2Yliw.js";import"./ProgressBar-DqwDkFTJ.js";import"./Rating-Bb3yeVUh.js";import"./Skeleton-C9fzI41z.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
