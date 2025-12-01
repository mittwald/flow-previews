import{j as r,r as f}from"./iframe-Clmt7jYU.js";import{r as o,g as z}from"./TimeField-C0di3Y5z.js";import{L as R}from"./Label-D60DkhLa.js";import{B as b}from"./Button-Cpx-qVCp.js";import{S as x}from"./Section-D-4V5L53.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-Cmcxz_BG.js";import"./mergeRefs-BVqKkfsA.js";import"./index-DiVEBKFG.js";import"./clsx-B-dksMZM.js";import"./Accordion-2-mRDe9S.js";import"./dynamic-ByO6kVlP.js";import"./IconWarning-CMDAZJGy.js";import"./ActionGroup-3f2mOrmo.js";import"./Alert-BgyTes7-.js";import"./AlertIcon-BuWV4Npm.js";import"./useLocalizedStringFormatter--ByhM2n4.js";import"./context-J-yaWB4J.js";import"./AlertBadge-B-cIikZ6.js";import"./Text-BQs7jhBI.js";import"./browser-BVazs59Q.js";import"./utils-BaIVInUf.js";import"./EmulatedBoldText-D5ywUyQZ.js";import"./Align-kP2wQykA.js";import"./Popover--yCHfjbQ.js";import"./context-BbRYzAs6.js";import"./Button-MP-U6i_K.js";import"./ProgressBar-D_4BHyIX.js";import"./Hidden-BZve3Xik.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-SBYuaUD7.js";import"./useFocusable-BgBMU_CS.js";import"./RSPContexts-BNhmdufL.js";import"./Collection-xRwg1v5k.js";import"./CollectionBuilder-kvAQOu82.js";import"./SelectionIndicator-Wyz_1aA8.js";import"./Separator-Cl_cENZa.js";import"./useStatic-Bnfhfmst.js";import"./OverlayTrigger-Ce8vZdG2.js";import"./TableFooterRow-Dn-FDhfn.js";import"./SkeletonText-Ox4-vvjw.js";import"./Avatar-Cap9qVE3.js";import"./AvatarStack-CyBZbnmd.js";import"./Badge-DSWTM4Cn.js";import"./BigNumber-K7d08C_A.js";import"./Breadcrumb-CW32JSiJ.js";import"./Link-Cdb-IjP9.js";import"./Heading-DOf1Gbjg.js";import"./Legend-DpHbpxDT.js";import"./FileCardList-C6knu-Gv.js";import"./Image-mYPdxUVA.js";import"./Color-C3WK5Ehq.js";import"./Content-BaHGf9op.js";import"./ContextualHelpTrigger-Dzc-OR_f.js";import"./CounterBadge-DOY94Zrr.js";import"./DonutChart-B4Pw1gDt.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-fPCU1kmj.js";import"./Header-geqBE9py.js";import"./Initials-C8rRxGXt.js";import"./InlineCode-DsrKBfEK.js";import"./PopoverTrigger-Bac14MEQ.js";import"./LoadingSpinner-CenMvatO.js";import"./Separator-C0rYsohv.js";import"./Message-_byUr7fM.js";import"./MessageSeparator-aISn9Nk9.js";import"./NavigationGroup-DCJQpVuq.js";import"./Notification-jgdKyHAO.js";import"./NotificationProvider-DV-TZjHG.js";import"./ProgressBar-CKu71Xlr.js";import"./Rating-D3r7O8dK.js";import"./Skeleton-K56s_bs8.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
