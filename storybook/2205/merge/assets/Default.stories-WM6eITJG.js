import{j as r,r as f}from"./iframe-CH4VWYyw.js";import{r as o,g as z}from"./TimeField-dOwLdr3y.js";import{L as R}from"./Label-DamxdNaK.js";import{B as b}from"./Button-CMjimR4T.js";import{S as x}from"./Section-BYSnoqOE.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-RGeJUgUt.js";import"./mergeRefs--_CTko6t.js";import"./index-FoM_NaoT.js";import"./clsx-B-dksMZM.js";import"./Accordion-BejuHqQb.js";import"./dynamic-BXkfH89u.js";import"./IconWarning-CUVmf0iP.js";import"./ActionGroup-DDR3DkjN.js";import"./Alert-CaRi4XO8.js";import"./AlertIcon-DXRGAj5W.js";import"./useLocalizedStringFormatter-BgdA6BoT.js";import"./context-C0jF3YAi.js";import"./AlertBadge-DfbHta5f.js";import"./Text-DppnPY0e.js";import"./browser-DUOSIs8m.js";import"./utils-B0RtSKxF.js";import"./EmulatedBoldText-BLn1bvyP.js";import"./Align-Cq_IfJO_.js";import"./Popover-Ca49wibL.js";import"./context-DhFeNNrI.js";import"./Button-C7FjL3VL.js";import"./ProgressBar-BTQp98g0.js";import"./Hidden-CDEXgFqV.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DRFwXyGM.js";import"./useFocusable-Au-ZLUmf.js";import"./RSPContexts-COBXgLKc.js";import"./Collection-L1fG0_vq.js";import"./CollectionBuilder-DHEE--Pj.js";import"./SelectionIndicator-Cmg6-Pdp.js";import"./Separator-88La-8FT.js";import"./useStatic-rQr5blZX.js";import"./OverlayTrigger-yyuSztfm.js";import"./TableFooterRow-DWNQ0T6x.js";import"./SkeletonText-fbDfrtFf.js";import"./Avatar-CDLXo50I.js";import"./AvatarStack-BQGqs3x_.js";import"./Badge-BzpkmF7E.js";import"./BigNumber-B6AfKhhh.js";import"./Breadcrumb-DUw-gA4L.js";import"./Link-CdVmxRjb.js";import"./Heading-luYK-1U3.js";import"./Legend-TD40ayv3.js";import"./FileCardList-ULRzupE2.js";import"./Image-BhQQBAtK.js";import"./Color-FPQa_iiC.js";import"./Content-BEbS3ZL_.js";import"./ContextualHelpTrigger-CobzlyXE.js";import"./CounterBadge-C4x4PBwO.js";import"./DonutChart-CvMGXJVi.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-0rvFNSTI.js";import"./Header-Dzk2QCYF.js";import"./Initials-V1IfrL6u.js";import"./InlineCode-BzROjjVp.js";import"./PopoverTrigger-4JRh7pUL.js";import"./LoadingSpinner-CM0pL980.js";import"./Separator-BvGa7liQ.js";import"./Message-BuA5oc5_.js";import"./MessageSeparator-BpgxY-nM.js";import"./NavigationGroup-C51j7e7Q.js";import"./Notification-CnHkVc1m.js";import"./NotificationProvider-ByUVCGCk.js";import"./ProgressBar-oW1SLDw-.js";import"./Rating-DJkF2UYV.js";import"./Skeleton-BPlxU9Ui.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
