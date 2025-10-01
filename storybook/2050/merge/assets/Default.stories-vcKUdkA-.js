import{j as r,r as V}from"./iframe-DRU2mvvl.js";import{M as e}from"./MarkdownEditor-DxattpEI.js";import{L as l}from"./Label-BMa7ap8T.js";import{F as _}from"./FieldError-DvrKLXyD.js";import{B as A}from"./Button-B0nESNPa.js";import{S as H}from"./Section-BqGqHoUM.js";import"./index-Cun1SEai.js";import"./Markdown-AVWXh6E7.js";import"./CodeBlock-DCSJuD7p.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DYlpbpWN.js";import"./IconWarning-Ns7aLDcg.js";import"./flowComponent-Dq3P4cwb.js";import"./index-CoBbVvoA.js";import"./index-BV-9eFwZ.js";import"./Tooltip-CSfYLJdx.js";import"./ClearPropsContextView-BOQrNGpC.js";import"./utils-CFpcVBbf.js";import"./OverlayArrow-BamfX0ZV.js";import"./useFocus-WX08leiR.js";import"./ProgressBar-CO2F47bQ.js";import"./Label-DZZppM_K.js";import"./Hidden-CuastpsR.js";import"./filterDOMProps-CghfNOdR.js";import"./context-WCWlHgyn.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B4CekZuY.js";import"./useFocusable-Bm6appxO.js";import"./useFocusRing-Dvcn05WP.js";import"./react-children-utilities-DXSSoUYA.js";import"./Action-DTfm05Ga.js";import"./context-BmZA5kUX.js";import"./useStatic-ZRFoobPh.js";import"./browser-DycDZ9Cy.js";import"./getActionGroupSlot-DvwtoTC6.js";import"./dynamic-BlISIwZy.js";import"./useLocalizedStringFormatter-xAOMWzO_.js";import"./Heading-iDuS5CV6.js";import"./Heading-Dpu9vKUA.js";import"./RSPContexts-uOHI89tH.js";import"./InlineCode-BBevWCkf.js";import"./Link-qtNdIHqj.js";import"./usePress-BqWNUUeu.js";import"./Separator-D3t_68CF.js";import"./Separator-D99CVDQv.js";import"./CollectionBuilder-Dd2Gplrf.js";import"./Text-CEDtxg_Y.js";import"./EmulatedBoldText-B-n-Sp9M.js";import"./Text-Qj1KdidL.js";import"./TextArea-BbbEgcQw.js";import"./TextFieldBase-Djl98XLc.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DM9XG9SC.js";import"./TextField-CIr7bTxf.js";import"./FieldError-C8YHk-IR.js";import"./context-ZJx-WxTz.js";import"./Form-BR3m4Qab.js";import"./Group-C-0gJbtA.js";import"./Input-Hz2jOfAo.js";import"./useTextField-DxM40D_X.js";import"./useFormReset-BYiU13z5.js";import"./useFormValidation-BPBMmZYe.js";import"./ReactAriaControlledValueFix-BIonxPfd.js";import"./useManagedValue-BQDePORj.js";import"./LoadingSpinner-Bxg5W_a4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DFs_j9qJ.js";import"./ContextMenuSection-S05W1Jlf.js";import"./Dialog-2Ji50Dgm.js";import"./Collection-sMc3txMy.js";import"./SelectionManager-BnRrB_cT.js";import"./useEvent-2v3ak77A.js";import"./useCollator-pfKZSWNa.js";import"./FocusScope-XgH7ylXa.js";import"./VisuallyHidden-D2z1OxrB.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
