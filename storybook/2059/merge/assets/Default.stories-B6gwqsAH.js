import{j as r,r as V}from"./iframe-LeKLDkYY.js";import{M as e}from"./MarkdownEditor-DIPU4hAa.js";import{L as l}from"./Label-_IGpUYiB.js";import{F as _}from"./FieldError-TZ4s3Na9.js";import{B as A}from"./Button-BbTRgfHO.js";import{S as H}from"./Section-BZBM6YrE.js";import"./index-Cun1SEai.js";import"./Markdown-DN0el3JW.js";import"./CodeBlock-DPQhSu90.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CKJdjwwJ.js";import"./IconWarning-DddVt0_L.js";import"./flowComponent-B87WjEVi.js";import"./index-Bs8MTrz8.js";import"./index-uQv72qiR.js";import"./Tooltip-CQmHh8GQ.js";import"./ClearPropsContextView-BstYBP5M.js";import"./utils-1n9saaJJ.js";import"./OverlayArrow-CWSdcIAn.js";import"./useFocus-DpQgRw3u.js";import"./ProgressBar-QdK-gkty.js";import"./Label-C1dMHZA4.js";import"./Hidden-CLJBhJup.js";import"./filterDOMProps-CghfNOdR.js";import"./context-wUV3k3U5.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-82f8Q_fD.js";import"./useFocusable-BqRn9RY3.js";import"./useFocusRing-AniuyIk6.js";import"./react-children-utilities-DG79Zr3J.js";import"./Action-BR3Us8L0.js";import"./context-DpN-jprx.js";import"./useStatic-BEy_HvO3.js";import"./browser-Cy-I7M8E.js";import"./getActionGroupSlot-5hfWvZu9.js";import"./dynamic-BVwjsZ-m.js";import"./useLocalizedStringFormatter-_ZYyHG1p.js";import"./Heading-DfULnXt6.js";import"./Heading-jlE5Mrug.js";import"./RSPContexts-CUA3wiFH.js";import"./InlineCode-BnBrr23N.js";import"./Link-DEBjG1uK.js";import"./usePress-kmLZVcf4.js";import"./Separator-LTsQeklN.js";import"./Separator-BBybTRPh.js";import"./CollectionBuilder-lBJI-o9S.js";import"./Text-tNO3jzOI.js";import"./EmulatedBoldText-CCtxrL0Y.js";import"./Text--oZ7LG8m.js";import"./TextArea--EG0mMtK.js";import"./TextFieldBase-lD2I63dC.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-7AeFbuXn.js";import"./TextField-BDgKTHd3.js";import"./FieldError-BDYKP3YZ.js";import"./context-BPwzWA_h.js";import"./Form-CCM4YJxo.js";import"./Group-CWnUrbV4.js";import"./Input-CErx5FmD.js";import"./useTextField--t-sUnTA.js";import"./useFormReset-CXz6fjib.js";import"./useFormValidation-B7bn9a_3.js";import"./ReactAriaControlledValueFix-D7JEkwnS.js";import"./useManagedValue-D3Thsd1M.js";import"./LoadingSpinner-DNtKok85.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CwiWPZWS.js";import"./ContextMenuSection-Dax-JE0X.js";import"./Dialog-Dqx_Qz1i.js";import"./Collection-CO40bpB2.js";import"./SelectionManager-RiHQO5ol.js";import"./useEvent-CeBaYdiI.js";import"./useCollator-Bk1IX2EM.js";import"./FocusScope-tqJ5v6CU.js";import"./VisuallyHidden-25_VPX5X.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
