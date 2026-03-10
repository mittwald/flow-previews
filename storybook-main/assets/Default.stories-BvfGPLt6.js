import{j as r,r as f}from"./iframe-DAdEF_a9.js";import{M as o}from"./MarkdownEditor-yKmgtPxt.js";import{L as R}from"./Label-D1h8c298.js";import{F as b}from"./FieldError-DAuD7Eqr.js";import{B as z}from"./Button-BL7hv3yg.js";import{S as x}from"./Section-CLn2WL9U.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BQj1y2sD.js";import"./CodeBlock-DPBf603p.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CGBAK-Mt.js";import"./IconWarning-B_QPuDoh.js";import"./flowComponent-CSaST_uw.js";import"./index-UhVc0W_W.js";import"./index-DqNUQeP9.js";import"./remote-BQ_isGLI.js";import"./Tooltip-4ooVrAkl.js";import"./utils-B1o5BDIk.js";import"./OverlayArrow-DM34mO9f.js";import"./useFocus-BHQGBA4R.js";import"./ProgressBar-Cv5-QMXF.js";import"./Label-DvwKTMzw.js";import"./Hidden-CcrF8gwt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CcpSY4Um.js";import"./context-DrtV74MG.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-5n4vvaIx.js";import"./useControlledState-D1JeUT3E.js";import"./useFocusable-vdr5CzJ0.js";import"./react-children-utilities-BqhHYIWj.js";import"./ActionBatch-BtBHZwy0.js";import"./useOverlayController-BdzCJ-ub.js";import"./useStatic-CKtHP4uD.js";import"./browser-DTw6e149.js";import"./getActionGroupSlot-2bD_hcYD.js";import"./dynamic-pIUCZeo6.js";import"./useLocalizedStringFormatter-DuO1Wowh.js";import"./Heading-CRr1Ukpo.js";import"./Heading-B0L1HgOG.js";import"./RSPContexts-BAZVNF9B.js";import"./InlineCode-D6ebTSHP.js";import"./Link-YDXwCESI.js";import"./usePress-AnOXMqB9.js";import"./Separator-J1_IhSVt.js";import"./Separator-DdtELOBz.js";import"./CollectionBuilder-T5ZwCV3b.js";import"./Text-BlXexclX.js";import"./EmulatedBoldText-DRN0x44S.js";import"./Text-ConA-l-E.js";import"./TextArea-C7MFezcg.js";import"./useFieldComponent-CLfspKSt.js";import"./useControlledHostValueProps-J23MCm-A.js";import"./FieldDescription-CFQCjYVN.js";import"./TextField-4ha8Auah.js";import"./FieldError-Be27Lv36.js";import"./Form-B4U7K7S8.js";import"./Group-D1kJtVaR.js";import"./Input-Cd2NpESg.js";import"./useTextField-BhMqFMtB.js";import"./useFormReset-BoqlzNfE.js";import"./useFormValidation-CWgfw6QX.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-kiIxGYqF.js";import"./AlertIcon-DxXhtuAo.js";import"./LoadingSpinner-BzYwrllt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DZLmAbDI.js";import"./ContextMenuSection-C3uZY6Us.js";import"./Dialog-CWk-zVbe.js";import"./Collection-kYozbpbp.js";import"./SelectionIndicator-BbyFO4Ic.js";import"./SelectionManager-CNmnVwle.js";import"./useEvent-DyHBlkna.js";import"./useCollator-BUCuy1eS.js";import"./FocusScope-Cya-_QqL.js";import"./VisuallyHidden-DtDztoAI.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Nr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Nr as __namedExportsOrder,Kr as default};
