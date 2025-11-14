import{j as r,r as f}from"./iframe-N2ZMMBua.js";import{s as o,g as z}from"./TimeField-Ce_qBq4J.js";import{L as R}from"./Label-CNIsCRQn.js";import{B as b}from"./Button-CQTX7C-7.js";import{S as x}from"./Section-Dlm8T0mZ.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-wZrUcs9C.js";import"./mergeRefs-D0sT2cWn.js";import"./index-C2BNDRbk.js";import"./clsx-B-dksMZM.js";import"./utils-UqP59DSc.js";import"./Accordion-Cx7YOjK-.js";import"./dynamic-Bg49ug6j.js";import"./IconWarning-BFO_JV1T.js";import"./ActionGroup-CcC1RkNL.js";import"./getActionGroupSlot-DEBzWZmX.js";import"./useStatic-BK7FFX-B.js";import"./Alert-C4x5XvaN.js";import"./AlertIcon-DP3sd6M_.js";import"./useLocalizedStringFormatter-BWX2KnbU.js";import"./context-CVOB-S2d.js";import"./AlertBadge-CCMWeYGv.js";import"./Text-B0nKVVvA.js";import"./browser-C3uOmI6O.js";import"./EmulatedBoldText-zrEG-jWJ.js";import"./Align-Ds9Q2xSR.js";import"./Popover-ITKHSPMr.js";import"./context-0hb6Imhj.js";import"./Button-ckJwL_Qm.js";import"./ProgressBar-DX8gLGDN.js";import"./Hidden-De6Yi14J.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CsS12N7n.js";import"./useFocusable-CYxsuuBl.js";import"./RSPContexts-W5rfe12r.js";import"./Collection-B-VaM1xo.js";import"./CollectionBuilder-sM43fN06.js";import"./SelectionIndicator-Pu8gh7X4.js";import"./Separator-05e1ttKJ.js";import"./OverlayTrigger-CtrEPdBT.js";import"./TableFooterRow-BSMhJEWV.js";import"./SkeletonText-C0dZ71Dc.js";import"./Avatar-UT9YFCej.js";import"./AvatarStack-DTzcVfX5.js";import"./Badge-CmQdROSx.js";import"./BigNumber-BpYjVhMM.js";import"./Breadcrumb-BU79UJRj.js";import"./Link-DGEEGfY5.js";import"./Heading-UwbM-u6i.js";import"./Legend-DPTWJJT_.js";import"./FileCardList-BFe4Um8S.js";import"./Image-c560F83g.js";import"./Color-g_oGdWKO.js";import"./Content-DKIO4hDm.js";import"./ContextualHelpTrigger-MtOPALsd.js";import"./CounterBadge-CnoO7JzY.js";import"./DonutChart-D5hSwyhh.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C92wbj0P.js";import"./Header-BplYHpBk.js";import"./Initials-1nVpomP1.js";import"./InlineCode-B0WCYRLN.js";import"./PopoverTrigger-DLnLI4gj.js";import"./LoadingSpinner-BF2HGxsW.js";import"./Separator-DrFjGgJ9.js";import"./Message-CzM_qt2p.js";import"./MessageSeparator-khAvmqi6.js";import"./NavigationGroup-p6nb8hAj.js";import"./Notification-DLP1k1dH.js";import"./NotificationProvider-VEcgpjyi.js";import"./ProgressBar-Dgh4xYdk.js";import"./Rating-CceFiRCw.js";import"./Skeleton-CkbNl4QS.js";const _r={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,inputRef:t,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
