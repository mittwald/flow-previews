import{j as r,r as f}from"./iframe-Ci26vI3B.js";import{M as o}from"./MarkdownEditor-TPgxQRSA.js";import{L as R}from"./Label-RXEJnYkv.js";import{F as b}from"./FieldError-CpZGKwRg.js";import{B as z}from"./Button-Bgg1raPB.js";import{S as x}from"./Section-B3-aJ9Rn.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-Dq4t_B-C.js";import"./CodeBlock-Cl7uTwih.js";import"./clsx-B-dksMZM.js";import"./CopyButton-B9ocCuZb.js";import"./IconWarning-CM9E6h9H.js";import"./flowComponent-BCoZzahf.js";import"./index-3wEtqLOq.js";import"./index-BgjIHz1Y.js";import"./remote-BeH756Ak.js";import"./Tooltip-BDCO_YKz.js";import"./utils-Prtw8tAI.js";import"./OverlayArrow-G0bNf6l9.js";import"./useFocus-BemMoN-v.js";import"./ProgressBar-Cd-gbxhy.js";import"./Label-CzTNGA-w.js";import"./Hidden-Bh4pa2b3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D7Kjovyf.js";import"./context-21njfTP5.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-IT4cpc8M.js";import"./useControlledState-B4ASThyn.js";import"./useFocusable-C470YARL.js";import"./react-children-utilities-C72H5SrX.js";import"./Action-BUuW9nUE.js";import"./context-BCzJciSx.js";import"./useStatic-wckFiMZJ.js";import"./browser-CkG7QNAh.js";import"./getActionGroupSlot--c77iWbK.js";import"./dynamic-CWUTf5k8.js";import"./useLocalizedStringFormatter-D463xrfM.js";import"./Heading--cJO5BZg.js";import"./Heading-CXYj_MKW.js";import"./RSPContexts-wYlI8WBg.js";import"./InlineCode-DncIqcuF.js";import"./Link-Iwra83HD.js";import"./usePress-BIn545i6.js";import"./Separator-CTfnNiME.js";import"./Separator-D2dDCvgZ.js";import"./CollectionBuilder-BZqHFZmJ.js";import"./Text-BThwDV_-.js";import"./EmulatedBoldText-TNvCnD2A.js";import"./Text-BBkEKRDK.js";import"./TextArea-s4Z2vvYn.js";import"./TextFieldBase-BhrDzMV9.js";import"./FieldDescription-DnqWWk67.js";import"./useFieldComponent-DlKim18O.js";import"./TextField-ZGHANY0-.js";import"./FieldError-C8ji9kGw.js";import"./Form-DDqIZ7ds.js";import"./Group-CueZt5qh.js";import"./Input-D6UBTZXc.js";import"./useTextField-ErgkhbMw.js";import"./useFormReset-CoDGZCB3.js";import"./useFormValidation-DbMZQ9P7.js";import"./useControlledHostValueProps-B1kNlUL3.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CW-S-5R1.js";import"./AlertIcon-CQS_iHVq.js";import"./LoadingSpinner-CiE2xtQ-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B-v9WAC7.js";import"./ContextMenuSection-B4FW6kIZ.js";import"./Dialog-DpyFyuBj.js";import"./Collection-B2Ssnxvf.js";import"./SelectionIndicator-DzwumZRP.js";import"./SelectionManager-3iDEc--o.js";import"./useEvent-DLiSbdt5.js";import"./useCollator-BE-Xf4hi.js";import"./FocusScope-ByCQWjTm.js";import"./VisuallyHidden-BSnmZ3mx.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
