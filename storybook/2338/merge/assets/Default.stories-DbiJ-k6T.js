import{j as r,r as l}from"./iframe-CtEjVB66.js";import{M as o}from"./MarkdownEditor-B-UE0zQ8.js";import{L as s}from"./Label-CvAjEv-1.js";import{F as u}from"./FieldError-BzQCv4a3.js";import{B as h}from"./Button-BbnjmOHy.js";import{S as f}from"./Section-B3QlijVL.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-Dcv5oSzi.js";import"./CodeBlock-PWwcdZwU.js";import"./clsx-B-dksMZM.js";import"./CopyButton-vnoKuuVp.js";import"./IconWarning-1CkAUSYF.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./index-it1EKrY8.js";import"./remote-4O72-jdB.js";import"./Tooltip-DP4Z_4Qw.js";import"./utils-BuEQZICT.js";import"./OverlayArrow-CZCYW2ow.js";import"./platform-UzmeURk8.js";import"./ProgressBar-l1h_jwKt.js";import"./Label-XCLRl25L.js";import"./Hidden-BjEfMFZ5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cn5QMcKF.js";import"./context-DXMIHXTO.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-B5ekdd71.js";import"./useFocus-CAMT_X1e.js";import"./useControlledState-D0kLTbtR.js";import"./useFocusable-CocGrzXD.js";import"./react-children-utilities-CyJ6DAwB.js";import"./ActionBatch-CDzJz977.js";import"./useOverlayController-BctbVInN.js";import"./useStatic-DVJZwH2g.js";import"./browser-CLHYf5YF.js";import"./getActionGroupSlot-CIbX-1NY.js";import"./dynamic-BbkFIR2Q.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./Heading-c1W7e3IT.js";import"./Heading-DMz3CQ7g.js";import"./RSPContexts-oGVR4C8S.js";import"./InlineCode-Unf9hZNX.js";import"./Link-DMg6xFRD.js";import"./usePress-Cre2k4PJ.js";import"./Separator-DeVRa_VD.js";import"./Separator-DZN-n_nE.js";import"./CollectionBuilder-DrURciPm.js";import"./Text-QCKh6xRo.js";import"./EmulatedBoldText-B5kV7YCs.js";import"./Text-1qNOxJF7.js";import"./TextArea-BVLycZdR.js";import"./useFieldComponent-B7HNchXP.js";import"./useControlledHostValueProps-UR5SmFsp.js";import"./FieldDescription-DOW1EL7Z.js";import"./TextField-uAKnHDmd.js";import"./FieldError-DJZxrTcD.js";import"./Form-Bs4UrYBw.js";import"./Group-BKGRpIrc.js";import"./Input-ByYkDHMz.js";import"./useTextField-7MsF6vto.js";import"./useFormReset-2RZyXaKm.js";import"./useFormValidation-ClIfwgLl.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DqjTg_vO.js";import"./AlertIcon-BaGtIfyD.js";import"./LoadingSpinner-CJX4ksrz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bk9_EddI.js";import"./ContextMenuSection-COxyh1Te.js";import"./Dialog-vhqDwDKM.js";import"./Collection-CxJJKT3U.js";import"./SelectionIndicator-C1Ub3Y-f.js";import"./SelectionManager-CXnMaIVJ.js";import"./useCollator-OQsKm26_.js";import"./FocusScope-SeuSo2RO.js";import"./VisuallyHidden-B96eA0GA.js";const Vr={title:"Form Controls/MarkdownEditor",component:o,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,allowResize:!1},argTypes:{allowResize:{control:"inline-radio",options:[!1,!0,"horizontal","vertical"]}},render:e=>r.jsx(o,{placeholder:"Write a message...",...e,children:r.jsx(s,{children:"Message"})})},i={},a={args:{showCharacterCount:!0,maxLength:100}},n={render:e=>r.jsxs(o,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(s,{children:"Message"}),r.jsx(u,{children:"Invalid message"})]})},p={render:e=>r.jsx(o,{...e,autoResizeMaxRows:5,rows:3,children:r.jsx(s,{children:"Message"})})},m={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(s,{children:"Message"})})},c={render:e=>{const t=l.useRef(null),d=()=>{t.current&&t.current.focus()};return r.jsxs(f,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(s,{children:"Message"})}),r.jsx(h,{type:"button",onClick:d,children:"Set focus"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <Label>Message</Label>
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} autoResizeMaxRows={5} rows={3}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const _r=["Default","ShowCharacterCount","WithFieldError","AutoResizeable","WithOnChange","WithRef"];export{p as AutoResizeable,i as Default,a as ShowCharacterCount,n as WithFieldError,m as WithOnChange,c as WithRef,_r as __namedExportsOrder,Vr as default};
