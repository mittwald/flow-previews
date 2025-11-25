import{j as r,r as f}from"./iframe-BLnMNn74.js";import{t as o,F as z}from"./Modal-8XeHYI3F.js";import{L as R}from"./Label-DsxxKAsc.js";import{B as b}from"./Button-BheRlZ5y.js";import{S as x}from"./Section-C4IRs01H.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-lDfDlCad.js";import"./flowComponent-Cc_1rAUW.js";import"./index-D7hijKS_.js";import"./index-BEG_ZaEs.js";import"./context-tC_fb_7Z.js";import"./Button-DcXCtAho.js";import"./utils-mouUCLqv.js";import"./ProgressBar-CiddY3ze.js";import"./Hidden-DG1PJtoX.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DeTRhxa_.js";import"./useFocusRing-DSyHnBAC.js";import"./useFocusable-CD4hwFyS.js";import"./RSPContexts-PYGgvhgu.js";import"./Collection-B9Zfgr-f.js";import"./CollectionBuilder-BNaZkMOR.js";import"./SelectionIndicator-B3Vil9K4.js";import"./Separator-CoYUerX-.js";import"./browser-3pbWDgJF.js";import"./useLocalizedStringFormatter-B2X4EAgn.js";import"./useStatic-C1gHOY5o.js";import"./FileCardList-C-nFF2lq.js";import"./IconWarning-DVYn3YAA.js";import"./Avatar-uSFzf8En.js";import"./AlertIcon-D_ZK5_qh.js";import"./Image-C3aTXuYo.js";import"./Text-BLxKn04K.js";import"./EmulatedBoldText-Y_QL0NOh.js";import"./Link-BiwBBQmE.js";import"./ControlledNotification-CJ1U_sXf.js";import"./LoadingSpinner-CXYzRfKv.js";import"./Flex-DEZ5_BjM.js";import"./Accordion-DYry0ver.js";import"./ActionGroup-D4qujtmo.js";import"./Alert-DpWN8tfH.js";import"./AlertBadge-DR63qZD8.js";import"./Align-DGThSHH9.js";import"./AvatarStack-C5tI56sp.js";import"./BigNumber-B8IdDyzZ.js";import"./Breadcrumb-QEC6aw0y.js";import"./Heading-D0fV1MUw.js";import"./Legend-DalDE9ec.js";import"./Color-CZRI8S1_.js";import"./TableFooterRow-DZByrFxu.js";import"./SkeletonText-CgnC14Qd.js";import"./Content-D01rsQck.js";import"./CounterBadge-DDvI3NyR.js";import"./DonutChart-CCUCxJB3.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-48_UokG_.js";import"./Header-Dvm5iR7H.js";import"./Initials-CGdYflvx.js";import"./InlineCode-5yLIxxaJ.js";import"./LayoutCard-BJitsBmJ.js";import"./Separator-B4qHJCoW.js";import"./MessageSeparator-BlU-rXLl.js";import"./NavigationGroup-BwV6U3dj.js";import"./Notification-BlXVrBim.js";import"./NotificationProvider-B_e8WRLe.js";import"./ProgressBar-CqlEDKCU.js";import"./Rating-CMJWfAMs.js";import"./Skeleton-Dhd804V2.js";const Ir={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},c={args:{rows:1,autoResizeMaxRows:5}},m={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
