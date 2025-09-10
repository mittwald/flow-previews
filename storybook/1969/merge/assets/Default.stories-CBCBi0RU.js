import{j as r,r as H}from"./iframe-CRsb57af.js";import{M as t}from"./MarkdownEditor-oWReJa8I.js";import{L as u}from"./Label-sr3fNKeT.js";import{F as K}from"./FieldError-Bqe2SFUH.js";import{u as N,F as U,a as Y}from"./Form-4WviLq8T.js";import{B as P}from"./Button-c2AsubDx.js";import{S as G}from"./Section-CKrLRysS.js";import"./Markdown-CNrtTjef.js";import"./CodeBlock-Bg1L473l.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Bl09NUgV.js";import"./IconWarning-CcDYRP7s.js";import"./PropsContextProvider-BR4-1agz.js";import"./mergeRefs-DplnSgkI.js";import"./index-CuZmym5e.js";import"./Tooltip-DZzKB8mH.js";import"./utils-CwotMdLX.js";import"./OverlayArrow-CXvzgL8W.js";import"./useFocus-DbNAjYIm.js";import"./ProgressBar-B7_oEUBN.js";import"./Label-ePem4EPa.js";import"./Hidden-CvrWtM-J.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CtSNSJe6.js";import"./context-DoWLFUeS.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DgD7b91N.js";import"./useFocusable-YH2tkZSf.js";import"./useFocusRing-UHNYZFwC.js";import"./react-children-utilities-BMpia36P.js";import"./Action-CddrIjFT.js";import"./context-q8TPx0Dl.js";import"./useStatic-l_ZOo8Ze.js";import"./browser-KjD5DeSR.js";import"./getActionGroupSlot-DOvThARP.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-BRTflqfT.js";import"./Heading-CqJETH-v.js";import"./Heading-gDp1ohs1.js";import"./RSPContexts-BEiHDPhP.js";import"./InlineCode-DXHs3XAS.js";import"./Link-0mQDsfoF.js";import"./usePress-DBBuz-CW.js";import"./Separator-Cl5lHxTb.js";import"./Separator-Be5OBuwC.js";import"./CollectionBuilder-CTW40qd5.js";import"./Text-BeV7pvCv.js";import"./EmulatedBoldText-LP_9OJ0Q.js";import"./Text-Dc62rOGI.js";import"./TextArea-DgHBx97A.js";import"./TextFieldBase-ycfFHvOF.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BsSNlfA2.js";import"./TextField-CrxNrIk9.js";import"./FieldError-B33IY45p.js";import"./Form-DcCFXF0q.js";import"./Group-BRcAYOXB.js";import"./useTextField-DakxfzUT.js";import"./useFormReset-Dz46-Gvc.js";import"./ReactAriaControlledValueFix-BCa7HjQH.js";import"./LoadingSpinner-BbraRPFj.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-kIpzmIw-.js";import"./ContextMenuSection-BD6Fmfit.js";import"./Dialog-J7-PabLc.js";import"./Collection-BmFAT2ID.js";import"./SearchField-Dc_y5Vr7.js";import"./useEvent-DYe7cJIX.js";import"./SelectionManager-vl9_ChBd.js";import"./useCollator-BqnPvmV5.js";import"./FocusScope-B2MzAavW.js";import"./VisuallyHidden-zV1rhxGD.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(S=(M=a.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var E,F,w;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(w=(F=n.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var j,R,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(C=(R=i.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var L,k,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(W=(k=m.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var v,O,_;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(_=(O=p.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var B,D,y;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => {
    const form = useForm({
      defaultValues: {
        message: ""
      }
    });
    return <Form form={form} onSubmit={async v => {
      action(v.message);
      form.reset();
    }}>
        <Field name="message" rules={{
        required: "Please enter a message"
      }}>
          <MarkdownEditor {...props}>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <br />
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(y=(D=c.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var I,z,T;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...(T=(z=d.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var V,q,A;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(A=(q=l.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const ge=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange","WithRef"];export{s as Default,a as Disabled,p as Resizeable,i as ShowCharacterCount,m as WithFieldError,c as WithForm,n as WithLabel,d as WithOnChange,l as WithRef,ge as __namedExportsOrder,he as default};
