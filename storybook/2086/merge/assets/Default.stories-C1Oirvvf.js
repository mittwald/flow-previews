import{j as r,r as h}from"./iframe-CMcq8v1f.js";import{M as e}from"./MarkdownEditor-PZGH_1ID.js";import{L as l}from"./Label-BIfXBQMD.js";import{F as g}from"./useFieldComponent-B7IsP0qp.js";import{B as f}from"./Button-CRhbM7FI.js";import{S as x}from"./Section-BVe8Ycpq.js";import"./index-nuYtCEEu.js";import"./Markdown-NFjzuqwS.js";import"./CodeBlock-CzA6perh.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DIn7mGa8.js";import"./IconWarning-pzLTBmMV.js";import"./flowComponent-DAEI1NYm.js";import"./index-UsNUevoW.js";import"./index-Tcjlyiep.js";import"./Tooltip-B5NXJQzH.js";import"./ClearPropsContextView-Cy6OLcLC.js";import"./ClearPropsContext-CU9ecYMv.js";import"./utils-B4_KO4f3.js";import"./OverlayArrow-Czusrgg9.js";import"./useFocus-B0Qlm3zv.js";import"./ProgressBar-DGR0UqD3.js";import"./Label-CtMkNZ5K.js";import"./Hidden-BSe2pCrZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-MLAtSIJy.js";import"./context-Bckjq63R.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C8UmWEhe.js";import"./useFocusable-DlaONHPB.js";import"./useFocusRing-CoJ5esee.js";import"./react-children-utilities-CDk9z-7u.js";import"./Action-DzVfKIry.js";import"./context-haW4s5UJ.js";import"./useStatic-CKvWQ5ch.js";import"./browser-BnbqEoZX.js";import"./getActionGroupSlot-CSYISPXH.js";import"./dynamic-FUMijUiW.js";import"./useLocalizedStringFormatter-BoDSEWEG.js";import"./Heading-B3YRxumr.js";import"./Heading-CmiL6R02.js";import"./RSPContexts-DoqEYCaI.js";import"./InlineCode-7XRdtEOB.js";import"./Link-BTcql2fF.js";import"./usePress-Bqdsvk60.js";import"./Separator-CZDK-KCI.js";import"./Separator-B5umkblU.js";import"./CollectionBuilder-DClya-CG.js";import"./Text-DOkc_YZA.js";import"./EmulatedBoldText-DAg28Pal.js";import"./Text-CkmSClwy.js";import"./TextArea-DXTJOZPu.js";import"./TextFieldBase-SxbfgzZO.js";import"./FieldDescription-CUyjOtFz.js";import"./TextField-Bw4pYMEF.js";import"./Form-BA9ATDJW.js";import"./Group-Cj4tB1lx.js";import"./Input-D43W09OA.js";import"./useTextField-2CL4Bwhs.js";import"./useFormReset-DUTu2q8R.js";import"./useFormValidation-C01Q1Aoq.js";import"./ReactAriaControlledValueFix-GWCaGKNm.js";import"./useManagedValue-CcA7aBmQ.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DgAvzAIP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-qWTNe4li.js";import"./ContextMenuSection-DtqQsaJ2.js";import"./Dialog-Drh022ms.js";import"./Collection-lzDPGY_z.js";import"./SelectionIndicator-npitMQ6K.js";import"./SelectionManager-CYX1bfTV.js";import"./useEvent-DWTRHc2N.js";import"./useCollator-DTERHYIY.js";import"./FocusScope-BZyWBR-T.js";import"./VisuallyHidden-Dy6kQkYD.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Hr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithOnChange","WithRef"];export{s as Default,a as Disabled,m as Resizeable,n as ShowCharacterCount,p as WithFieldError,i as WithLabel,c as WithOnChange,d as WithRef,Hr as __namedExportsOrder,Ar as default};
