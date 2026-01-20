import{j as r,r as f}from"./iframe-CG_BDTJg.js";import{M as o}from"./MarkdownEditor-COS6fvsq.js";import{L as R}from"./Label-eLDtxB0Y.js";import{F as b}from"./FieldError-DN7cTCYW.js";import{B as z}from"./Button-BmAaiuIV.js";import{S as x}from"./Section-pYf8QOQK.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C-YwxN61.js";import"./CodeBlock-BKs3hhci.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BDHFq2Bm.js";import"./IconWarning-OVzy7qXj.js";import"./flowComponent-Cu1B5LJt.js";import"./index-C71TA-pA.js";import"./index-CuwL1_wd.js";import"./remote-B2NguZ9L.js";import"./Tooltip-B9NT7NEe.js";import"./utils-BtbDMhcr.js";import"./OverlayArrow-CWZGtBJS.js";import"./useFocus-BQxEMJ7t.js";import"./ProgressBar-BZV9wt8q.js";import"./Label-CQ1G_pe6.js";import"./Hidden-DdAaT9j3.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DI7piRsn.js";import"./context-CXt1SSmQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BP00jBlc.js";import"./useFocusable-DFQV4HWE.js";import"./useFocusRing-CaZs-udO.js";import"./react-children-utilities-OMxrFp-5.js";import"./Action-CprlfWDd.js";import"./context-CBhRRwo5.js";import"./useStatic-CTCSTBly.js";import"./browser-yLu0BSsR.js";import"./getActionGroupSlot-CNqrnj_v.js";import"./dynamic-CvnWp_K2.js";import"./useLocalizedStringFormatter-DqHGK81F.js";import"./Heading--5M_y3tK.js";import"./Heading-BH9BsmNO.js";import"./RSPContexts-dESf_SGO.js";import"./InlineCode-HbRpKyyn.js";import"./Link-BK3BTJiC.js";import"./usePress-C5t6ziJ-.js";import"./Separator-nOIFjhyS.js";import"./Separator-BkBMJSLE.js";import"./CollectionBuilder-DPTu2GsG.js";import"./Text-DpPZns_R.js";import"./EmulatedBoldText-CNB3Go6_.js";import"./Text-CLAgqxCC.js";import"./TextArea-3QWZV1UO.js";import"./TextFieldBase-CZp7VYKj.js";import"./FieldDescription-CpYRZCBv.js";import"./useFieldComponent-UHV4FB79.js";import"./TextField-9-E4XJ-F.js";import"./FieldError-DIhe2pHb.js";import"./Form-LFW5XTCh.js";import"./Group-CxPvNJzw.js";import"./Input-Dsqxq3JD.js";import"./useTextField-DysDvNEv.js";import"./useFormReset-BbxWwIqr.js";import"./useFormValidation-BBj6R535.js";import"./useControlledHostValueProps-DF1I2_Rs.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BXThyvrG.js";import"./AlertIcon-y6uiAF7a.js";import"./LoadingSpinner-DTxDKIsL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DIbF_cdk.js";import"./ContextMenuSection-BjTcX3F7.js";import"./Dialog-CMl17GR5.js";import"./Collection-BiCXXajm.js";import"./SelectionIndicator-ZCsaESBY.js";import"./SelectionManager-CCfPEZQf.js";import"./useEvent-B3SFi6nF.js";import"./useCollator-CGeacNLD.js";import"./FocusScope-CTViNy8e.js";import"./VisuallyHidden-pR1kpoR7.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Pr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Pr as __namedExportsOrder,Nr as default};
