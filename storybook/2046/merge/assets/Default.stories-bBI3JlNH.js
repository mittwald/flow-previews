import{j as r,r as V}from"./iframe-8Gn-cQAI.js";import{M as e}from"./MarkdownEditor-t7uqFtCI.js";import{L as l}from"./Label-BKQD2yp-.js";import{F as _}from"./FieldError-C-zSllwf.js";import{B as A}from"./Button-BYLyJZ8T.js";import{S as H}from"./Section-D-_npJws.js";import"./index-Cun1SEai.js";import"./Markdown-DWtjA8qZ.js";import"./CodeBlock-BCBhKdMl.js";import"./clsx-B-dksMZM.js";import"./CopyButton-xfaUTfmP.js";import"./IconWarning-D4orWaCC.js";import"./flowComponent-DkmU8bZi.js";import"./index-AzFL6bUY.js";import"./index-UEc6MpK_.js";import"./Tooltip-pmWWtl2O.js";import"./ClearPropsContextView-CnCgZIgn.js";import"./utils-GVjct8zS.js";import"./OverlayArrow-t8YkI2AY.js";import"./useFocus-B0X0Lu9Z.js";import"./ProgressBar-Cd_i9EHd.js";import"./Label-BTym8jb9.js";import"./Hidden-ClnO7J5u.js";import"./filterDOMProps-CghfNOdR.js";import"./context-BNiVp3am.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CowCOuKH.js";import"./useFocusable-D0eqHiUC.js";import"./useFocusRing-CitWdiPC.js";import"./react-children-utilities-BGYUETTG.js";import"./Action-HGXjP-6z.js";import"./context-BIaltrhp.js";import"./useStatic-D4LCMNvH.js";import"./browser-BcQIid3c.js";import"./getActionGroupSlot-DshV_Wd3.js";import"./dynamic-rXbOiSCg.js";import"./useLocalizedStringFormatter-Bkj0giXD.js";import"./Heading-hkF7brSR.js";import"./Heading-CLQt8OMj.js";import"./RSPContexts-BLLLZDxH.js";import"./InlineCode-EfX0Ucmk.js";import"./Link-5Km-wuq7.js";import"./usePress-ITUQCIPr.js";import"./Separator-DuLEWuHI.js";import"./Separator-Dm-csSJW.js";import"./CollectionBuilder-9Z-fAvba.js";import"./Text-CaltWpnJ.js";import"./EmulatedBoldText-BFjU3iq0.js";import"./Text-YtT3E9ZO.js";import"./TextArea-yHrt3Wv4.js";import"./TextFieldBase-C6vWj34E.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BfSaLbIT.js";import"./TextField-CGZRqELK.js";import"./FieldError-BP_wpITZ.js";import"./context-OwOTZ-QT.js";import"./Form-uqEItuxM.js";import"./Group-D6MDioP3.js";import"./Input-D8m2LMBm.js";import"./useTextField-CZZzsHWG.js";import"./useFormReset-EWszKDPA.js";import"./useFormValidation-CDT2yp15.js";import"./ReactAriaControlledValueFix-CTvHT95w.js";import"./useManagedValue-CV7g12Zq.js";import"./LoadingSpinner-DLXLBid4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-3o-n2ltV.js";import"./ContextMenuSection-BSmzwpDI.js";import"./Dialog-DaZvxqJC.js";import"./Collection-DWEguDCp.js";import"./SelectionManager-CsYJeMyB.js";import"./useEvent-CbQE1MrG.js";import"./useCollator-DlUVcb0E.js";import"./FocusScope-CFCh8ZEd.js";import"./VisuallyHidden-hAbnP3vK.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(M=(x=a.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var E,w,b;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var R,S,C;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var j,L,k;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(k=(L=p.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var F,W,v;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(v=(W=m.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var D,z,B;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...(B=(z=c.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var I,O,y;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(y=(O=d.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};const co=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithOnChange","WithRef"];export{s as Default,a as Disabled,m as Resizeable,n as ShowCharacterCount,p as WithFieldError,i as WithLabel,c as WithOnChange,d as WithRef,co as __namedExportsOrder,mo as default};
