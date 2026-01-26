import{j as r,r as f}from"./iframe-DcHapM8k.js";import{M as o}from"./MarkdownEditor-BEuId-6R.js";import{L as R}from"./Label-C_3MZF40.js";import{F as b}from"./FieldError-BzyrakFb.js";import{B as z}from"./Button-C1DQEdG6.js";import{S as x}from"./Section-BLxdCMFP.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CCA9mgxX.js";import"./CodeBlock-C7dO1Znk.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BKC9ZkMn.js";import"./IconWarning-8t1q80cl.js";import"./flowComponent-F2rlWCYo.js";import"./index-DtEczAXX.js";import"./index-Ba4Wgmch.js";import"./remote-CrHpKc5j.js";import"./Tooltip-w5Xh9PuK.js";import"./utils-BN-Wf9GB.js";import"./OverlayArrow-Ct2arrPt.js";import"./useFocus-ZXD30Rmm.js";import"./ProgressBar-Dz7b_e2x.js";import"./Label-Cc29pwI9.js";import"./Hidden-BBxp_Bwo.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DVAEGcEm.js";import"./context-Camfekg3.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CD18I4-6.js";import"./useFocusable-CPQk5Kbw.js";import"./useFocusRing-Dt3gTaal.js";import"./react-children-utilities-C68MBcPQ.js";import"./Action-CLgptl7p.js";import"./context-C5BkLhj5.js";import"./useStatic-lCMR7rr_.js";import"./browser-BhJkGPhR.js";import"./getActionGroupSlot-BZTJVxAa.js";import"./dynamic-B-FNOw2F.js";import"./useLocalizedStringFormatter--D1phWvd.js";import"./Heading-CSFiGnXH.js";import"./Heading-DlC7g6iA.js";import"./RSPContexts-DXTQnhuO.js";import"./InlineCode-DR_Wrf80.js";import"./Link-VWWhibvp.js";import"./usePress-DRRwHOXQ.js";import"./Separator-DJAxc-dO.js";import"./Separator-DyT19d9_.js";import"./CollectionBuilder-edhcBSCU.js";import"./Text-BqUUaAMX.js";import"./EmulatedBoldText-BsmORSBd.js";import"./Text-KTnK0cez.js";import"./TextArea-VgYB1VYw.js";import"./TextFieldBase-DHsTWBUF.js";import"./FieldDescription-C8ShlXx2.js";import"./useFieldComponent-DLXIz4kk.js";import"./TextField-C4vDdw6V.js";import"./FieldError-DeohvbOn.js";import"./Form-N_ssJC2Q.js";import"./Group-cOoV5f3K.js";import"./Input-_1JxoJ2g.js";import"./useTextField-t09HgXOF.js";import"./useFormReset-DByFRxt8.js";import"./useFormValidation-C5Tej2mU.js";import"./useControlledHostValueProps-BzOdOIBK.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CmRq4USe.js";import"./AlertIcon-aSf31ti-.js";import"./LoadingSpinner-DeuQI20n.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DGX0xFqX.js";import"./ContextMenuSection-Bxsn88Zf.js";import"./Dialog-gML-GktL.js";import"./Collection-y5T8eap-.js";import"./SelectionIndicator-nDWEY-Pb.js";import"./SelectionManager-cayBw_JG.js";import"./useEvent-FsYqvuuv.js";import"./useCollator-CvGBdlrR.js";import"./FocusScope-DwQWTV3n.js";import"./VisuallyHidden-ZuD5qc8D.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
