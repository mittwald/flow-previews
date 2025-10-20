import{j as r,r as V}from"./iframe-CwuqIU3i.js";import{M as e}from"./MarkdownEditor-uaIV98mw.js";import{L as l}from"./Label-B0BiyK3O.js";import{F as _}from"./useFieldComponent-eP2W8yne.js";import{B as A}from"./Button-BqbqUci_.js";import{S as H}from"./Section-LUqPWyIZ.js";import"./index-Cun1SEai.js";import"./Markdown-GJX2P0Ds.js";import"./CodeBlock-DJMfd7ZA.js";import"./clsx-B-dksMZM.js";import"./CopyButton-qi6j_57f.js";import"./IconWarning-DfuZN-Hc.js";import"./flowComponent-CW5hnf4o.js";import"./index-DCuX0QuH.js";import"./index-DdRMNQVP.js";import"./Tooltip-DfradJ05.js";import"./ClearPropsContextView-fXO2DKoU.js";import"./ClearPropsContext-DGTEyAkG.js";import"./utils-BNUN6Z86.js";import"./OverlayArrow-DPamNpoY.js";import"./useFocus-JEz06IDi.js";import"./ProgressBar-BzO_ljLZ.js";import"./Label-Ds7Yihzi.js";import"./Hidden-AzgHkXqa.js";import"./filterDOMProps-CghfNOdR.js";import"./context-Cr--o0Ww.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B3_Egg2G.js";import"./useFocusable-CYb_RHOH.js";import"./useFocusRing-Csjn1IfN.js";import"./react-children-utilities-BfKePjVo.js";import"./Action-Dz8VIf0X.js";import"./context-B1E32d2Q.js";import"./useStatic-DLE3zC_Y.js";import"./browser-DUGYsxZ_.js";import"./getActionGroupSlot-Bjm84Kbj.js";import"./dynamic-DTSFzVL0.js";import"./useLocalizedStringFormatter-CenpEZM_.js";import"./Heading-IfYlGqVo.js";import"./Heading-C5Mr4Kjc.js";import"./RSPContexts-BJREWOlr.js";import"./InlineCode-CXc1vVAB.js";import"./Link-BR92CTno.js";import"./usePress-CdaIPuHn.js";import"./Separator-BER3NVXa.js";import"./Separator-OZJOm_uc.js";import"./CollectionBuilder-BkgyTACG.js";import"./Text-Dbs8GmZM.js";import"./EmulatedBoldText-DuSj7T8w.js";import"./Text-WRK6H0Wn.js";import"./TextArea-CQh26ne0.js";import"./TextFieldBase-Sy7zspWU.js";import"./FieldDescription-CJ9p1yOe.js";import"./TextField-DH4M0LGG.js";import"./Form-C1wZYKgN.js";import"./Group-OczM-V_0.js";import"./Input-Cwt17kbg.js";import"./useTextField-tXwlexz2.js";import"./useFormReset-BLDFw02N.js";import"./useFormValidation-DK6PIssV.js";import"./ReactAriaControlledValueFix-D3IvEHi3.js";import"./useManagedValue-D9jHPQWW.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BmjVj-LQ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BUhZq-tB.js";import"./ContextMenuSection-BU9M0i_t.js";import"./Dialog-BB45Hyg5.js";import"./Collection-YYfkw6ZM.js";import"./SelectionIndicator-pORsGxIs.js";import"./SelectionManager-Cunz5w8r.js";import"./useEvent-CWvMBd14.js";import"./useCollator-Vvi4fPh5.js";import"./FocusScope-AJCIL371.js";import"./VisuallyHidden-DO5WoARG.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
