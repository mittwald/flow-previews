import{j as r,r as f}from"./iframe-EfPcFfHz.js";import{M as o}from"./MarkdownEditor-DeZVdrjU.js";import{L as R}from"./Label-DkribH7U.js";import{F as b}from"./FieldError-Bm6xTrGY.js";import{B as z}from"./Button-wFzIQtGi.js";import{S as x}from"./Section-CV61pRu2.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DL0TC_ml.js";import"./CodeBlock-pkJM4I7U.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Om9duvcX.js";import"./IconWarning-73LpV07E.js";import"./flowComponent-CIh5pHt4.js";import"./index-BiW-O58f.js";import"./index-BhGEUnhH.js";import"./remote-D3-8ROh8.js";import"./Tooltip-DLodUkQ6.js";import"./utils-Cnkpfm_P.js";import"./OverlayArrow-MDNnCdLA.js";import"./useFocus-7edk4FfO.js";import"./ProgressBar-vuTPs7Pi.js";import"./Label-BDpZ1WTb.js";import"./Hidden-B6ugZRtA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DunHH7R3.js";import"./context-kn7lEdrW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-8P8y2KFJ.js";import"./useControlledState-WqoJm4pI.js";import"./useFocusable-CT_qKlvn.js";import"./react-children-utilities-Drk3yB3D.js";import"./ActionBatch-DG-IZD13.js";import"./useOverlayController-xYgjz7Dg.js";import"./useStatic-V9jmy_2G.js";import"./browser-hyQhTs1N.js";import"./getActionGroupSlot-CHTwX_6D.js";import"./dynamic-BKd_XzPu.js";import"./useLocalizedStringFormatter-CSMkY09C.js";import"./Heading-D-lxgqSK.js";import"./Heading-fpS9fclC.js";import"./RSPContexts-CIVPcPB5.js";import"./InlineCode-BiOSfjfv.js";import"./Link-B8KOIGGv.js";import"./usePress-CzmE2CoS.js";import"./Separator-DBO-VJt5.js";import"./Separator-DgmB0SGY.js";import"./CollectionBuilder-BX09WhcJ.js";import"./Text-CRFCcT-P.js";import"./EmulatedBoldText-DO_ezaQd.js";import"./Text-B4oHPq8R.js";import"./TextArea-DfjeOmi1.js";import"./useFieldComponent-BpgXbjM-.js";import"./useControlledHostValueProps-BEWm02p_.js";import"./FieldDescription-CaLE571G.js";import"./TextField-DroX1W2v.js";import"./FieldError-DGjeovc7.js";import"./Form-DLgE0tCZ.js";import"./Group-CvPJMXy4.js";import"./Input-DZTbr2NP.js";import"./useTextField-jB8aFAKf.js";import"./useFormReset-CDR6jl2x.js";import"./useFormValidation-DvOB0MQU.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BC8DinUo.js";import"./AlertIcon-CtDfui7q.js";import"./LoadingSpinner-5WRu_N9f.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BlxZZJFh.js";import"./ContextMenuSection-CgcrgsP7.js";import"./Dialog-DJ1EGGEI.js";import"./Collection-BHjKpR2C.js";import"./SelectionIndicator-CeAI6QPx.js";import"./SelectionManager-laCcBYMs.js";import"./useEvent-vACQ5A8t.js";import"./useCollator-D3lxHqNW.js";import"./FocusScope-CSvsVBha.js";import"./VisuallyHidden-CH2GsO1v.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
