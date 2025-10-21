import{j as r,r as V}from"./iframe-DW8JgK09.js";import{M as e}from"./MarkdownEditor-B7FaTDJt.js";import{L as l}from"./Label-DSYT14js.js";import{F as _}from"./FieldError-DC6xH_3a.js";import{B as A}from"./Button-DVfVMpGI.js";import{S as H}from"./Section-BDXmkbnW.js";import"./index-Cun1SEai.js";import"./Markdown-BA77ZVs2.js";import"./CodeBlock-3hRk0U5N.js";import"./clsx-B-dksMZM.js";import"./CopyButton-GYulTWTL.js";import"./IconWarning-Bj3cOyEj.js";import"./flowComponent-DVStQUuA.js";import"./index-SxHndKnJ.js";import"./index-7zpoyBXT.js";import"./Tooltip-BDlkk_tL.js";import"./ClearPropsContextView-E99s4u78.js";import"./utils-qQbsMKok.js";import"./OverlayArrow-Cbixw9Yo.js";import"./useFocus-BeoGO6Gw.js";import"./ProgressBar-CK1_umDo.js";import"./Label-CI_LuAln.js";import"./Hidden-DtieFvyE.js";import"./filterDOMProps-CghfNOdR.js";import"./context-MVg0njeL.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BE2AOUIF.js";import"./useFocusable-ClSVLyWP.js";import"./useFocusRing-GKfEZ5du.js";import"./react-children-utilities-Bdg9vzpT.js";import"./Action-CbSL4lf7.js";import"./context-BXN8qI2U.js";import"./useStatic-Dd3Fa8_Q.js";import"./browser-Ddqyq5_4.js";import"./getActionGroupSlot-GOPGQ3I0.js";import"./dynamic-B0cR68qH.js";import"./useLocalizedStringFormatter-Dqx84O-E.js";import"./Heading-CaIz_fSc.js";import"./Heading-Dmp-704c.js";import"./RSPContexts-DSsYPi0N.js";import"./InlineCode-BesUlzj0.js";import"./Link-DvwNgxRE.js";import"./usePress-Gti5y3pG.js";import"./Separator-ChvZYm5c.js";import"./Separator-CkUHVVyK.js";import"./CollectionBuilder-CBDSTuoJ.js";import"./Text-DqrSOA-D.js";import"./EmulatedBoldText-C-FDCcHS.js";import"./Text-Dj-iJoJL.js";import"./TextArea-eVHtuhYA.js";import"./TextFieldBase-D3NAWoBr.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Qi6hMuIW.js";import"./TextField-Ds9laKIn.js";import"./FieldError-D4VyS34i.js";import"./Form-DQnvx-Rv.js";import"./Group-BO-d7acf.js";import"./Input-Dnb568Ti.js";import"./useTextField-zAcryspZ.js";import"./useFormReset-DWeezvOC.js";import"./useFormValidation-BJNwWy_2.js";import"./ReactAriaControlledValueFix-BQTQsIsB.js";import"./useManagedValue-B2d8Gej_.js";import"./LoadingSpinner-3AaEPCkk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B7FVzAyg.js";import"./ContextMenuSection-CcJ6gQBU.js";import"./Dialog-Ch87mkCh.js";import"./Collection-C1Fkd8Xr.js";import"./SelectionIndicator-CLj4WkbT.js";import"./SelectionManager-BpH8C0of.js";import"./useEvent-DPuiGjqT.js";import"./useCollator-JcvJSriM.js";import"./FocusScope-BFAEdpe6.js";import"./VisuallyHidden-Da3g07dP.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
