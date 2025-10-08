import{j as r,r as V}from"./iframe-F0_qnNmG.js";import{M as e}from"./MarkdownEditor-DCOouCru.js";import{L as l}from"./Label-BW-f-a9z.js";import{F as _}from"./FieldError-Cez4hVsO.js";import{B as A}from"./Button-6GY0aJmr.js";import{S as H}from"./Section-B3WAbWpL.js";import"./index-Cun1SEai.js";import"./Markdown-BBMzq6g6.js";import"./CodeBlock-Cyl_gIb7.js";import"./clsx-B-dksMZM.js";import"./CopyButton-COBCmaKU.js";import"./IconWarning-uipPPHio.js";import"./flowComponent-GddMka9Q.js";import"./index-D9xEo-AP.js";import"./index-Bz7U0goG.js";import"./Tooltip-CbTAfVaF.js";import"./ClearPropsContextView-CdemR_HK.js";import"./utils-sDrdBfYO.js";import"./OverlayArrow-DJ_OxNNs.js";import"./useFocus-DXNQJCU_.js";import"./ProgressBar-BhbNzFL_.js";import"./Label-D-2NVJQc.js";import"./Hidden-D_DlAV2X.js";import"./filterDOMProps-CghfNOdR.js";import"./context-BBFKgyN5.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DnVXKiKM.js";import"./useFocusable-ueFnB-zi.js";import"./useFocusRing-DNaFw-NR.js";import"./react-children-utilities-Jn2pMKLR.js";import"./Action-rcgaEMhe.js";import"./context-BzKhkjPO.js";import"./useStatic-B-ONLx4H.js";import"./browser-Cnb-FwPQ.js";import"./getActionGroupSlot-C4q-hMJK.js";import"./dynamic-Bv8wQ4eA.js";import"./useLocalizedStringFormatter-DWKCNeCS.js";import"./Heading-DUYmd3Yr.js";import"./Heading-CslUe0CH.js";import"./RSPContexts-B8tkrJ5_.js";import"./InlineCode-BGBua1vh.js";import"./Link-BfpJk8hc.js";import"./usePress-D0DSh--k.js";import"./Separator-D6TJdFZd.js";import"./Separator-CDhUdR2K.js";import"./CollectionBuilder-BnV_Tl8t.js";import"./Text-DO7iLNcc.js";import"./EmulatedBoldText-nQ9KrBk1.js";import"./Text-aPdZ_B4g.js";import"./TextArea-CSjt5AAg.js";import"./TextFieldBase-CbECE_nY.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Ib5hCrh-.js";import"./TextField-ai3fCM35.js";import"./FieldError-Ba7AQt9l.js";import"./context-DsS8yj4W.js";import"./Form-Ca0x7b6g.js";import"./Group-z3D8wTQE.js";import"./Input-DMy6iJHZ.js";import"./useTextField-CkA_A7v3.js";import"./useFormReset-yESpD6TP.js";import"./useFormValidation-CO-DTcJJ.js";import"./ReactAriaControlledValueFix-CEDZYJ47.js";import"./useManagedValue-CAx7Vz1H.js";import"./LoadingSpinner-Ct4VP7lS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-vo1xOT6L.js";import"./ContextMenuSection-CVTYXQHy.js";import"./Dialog-DaSdBBae.js";import"./Collection-Bb4E4fO1.js";import"./SelectionManager-BSSRyZsY.js";import"./useEvent-CBSm4e4D.js";import"./useCollator-CNod_Fl3.js";import"./FocusScope-BnokTE9A.js";import"./VisuallyHidden-BlAFGTlT.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
