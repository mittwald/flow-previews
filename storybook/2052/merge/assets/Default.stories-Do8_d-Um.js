import{j as r,r as V}from"./iframe-CuPb25cv.js";import{M as e}from"./MarkdownEditor-DHitZmX2.js";import{L as l}from"./Label-BZpLTozc.js";import{F as _}from"./useFieldComponent-D7Smil9s.js";import{B as A}from"./Button-Cy_FSVpl.js";import{S as H}from"./Section-B55_57D7.js";import"./index-Cun1SEai.js";import"./Markdown-BKodtpDo.js";import"./CodeBlock-BsM95Q6E.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DETJwyRw.js";import"./IconWarning-CLSl9yKt.js";import"./flowComponent-7fMtXNgu.js";import"./index-CslL-pQh.js";import"./index-DkEiVX-f.js";import"./Tooltip-XK3F9AOy.js";import"./ClearPropsContextView-B81Rbv-y.js";import"./ClearPropsContext-1rzIpp4D.js";import"./utils-rjde634_.js";import"./OverlayArrow-iWeFoukr.js";import"./useFocus-Cts5O1ED.js";import"./ProgressBar-CiugOVQS.js";import"./Label-B7k3ity1.js";import"./Hidden-CG2yJe_k.js";import"./filterDOMProps-CghfNOdR.js";import"./context-Cf_eXnNJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-zpPREGnC.js";import"./useFocusable-CMpHMgWZ.js";import"./useFocusRing-rCVkEzcT.js";import"./react-children-utilities-OY5o0O78.js";import"./Action-CE7P3CGA.js";import"./context-B692btnM.js";import"./useStatic-BfPJwRSw.js";import"./browser-1QXSrBs6.js";import"./getActionGroupSlot-DZJjgnxC.js";import"./dynamic-CGQ0FoZ_.js";import"./useLocalizedStringFormatter-C6GTeGHr.js";import"./Heading-DyK_r6HL.js";import"./Heading-CSLfLI3i.js";import"./RSPContexts-xO1N3or9.js";import"./InlineCode-Njf1uGRR.js";import"./Link-C-VKV--6.js";import"./usePress-BpP9sX_8.js";import"./Separator-D0Xo8Prf.js";import"./Separator-DV0TabKR.js";import"./CollectionBuilder-Dw6bvv_r.js";import"./Text-2_ekHeae.js";import"./EmulatedBoldText-aijrrTX2.js";import"./Text-DqFBqxgU.js";import"./TextArea-DeNqirjp.js";import"./TextFieldBase-Cpr2rxOi.js";import"./FieldDescription-C0wUj9vw.js";import"./TextField-D8WUfi5z.js";import"./Form-BCVzxl1k.js";import"./Group-CwH8Xmuc.js";import"./Input-DxrKJDZ_.js";import"./useTextField-459gVrKP.js";import"./useFormReset-Cj0hiSlt.js";import"./useFormValidation-DUD5vlRz.js";import"./ReactAriaControlledValueFix-DRH_PgL6.js";import"./useManagedValue-Di8zsDa6.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BlCTpLFY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DVhMN4v1.js";import"./ContextMenuSection-D_Ue6SpG.js";import"./Dialog-CfTpgVgc.js";import"./Collection-CNWEIWZq.js";import"./SelectionIndicator-H-x2PvD-.js";import"./SelectionManager-mI79mw48.js";import"./useEvent-BuJ7ERaN.js";import"./useCollator-D4PCkYMI.js";import"./FocusScope-Dlp3dq5q.js";import"./VisuallyHidden-CoDyqh9l.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
