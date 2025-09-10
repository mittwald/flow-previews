import{j as r,r as H}from"./iframe-BpdxrwIb.js";import{M as t}from"./MarkdownEditor-CjUrdds6.js";import{L as u}from"./Label-B05m9Jha.js";import{F as K}from"./FieldError-BNkV0zVI.js";import{u as N,F as U,a as Y}from"./Form-ChoNkt05.js";import{B as P}from"./Button-CwyQ24Il.js";import{S as G}from"./Section-Aj8NHk1U.js";import"./Markdown-DGeZ7CPP.js";import"./CodeBlock-ttxd6BSh.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BAWU3wFa.js";import"./IconWarning-DfpVuNuz.js";import"./PropsContextProvider-DQxbhqBM.js";import"./mergeRefs-DF-I3_2K.js";import"./index-C0Vgww7F.js";import"./Tooltip-C3PVFzdH.js";import"./utils-60PhQC-u.js";import"./OverlayArrow-C7JKPmKj.js";import"./useFocus-C0zYbozs.js";import"./ProgressBar-2VJ7xBq6.js";import"./Label-CccUO69Q.js";import"./Hidden-DpRx3EBx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BwWD19Pf.js";import"./context-CefFUzIe.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BiXfF0Y1.js";import"./useFocusable-DOYJV0v_.js";import"./useFocusRing-s_pNlp3q.js";import"./react-children-utilities-B-2Q0432.js";import"./Action-COhKRbVc.js";import"./context-Cy2K_ymr.js";import"./useStatic-_L-kGsxT.js";import"./browser-CjlkZb14.js";import"./getActionGroupSlot-8B6o1Jcn.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-B3Ezl97M.js";import"./Heading-oG-P3IEC.js";import"./Heading-xcfdV1Zm.js";import"./RSPContexts-COprRsvg.js";import"./InlineCode-woZDgR4E.js";import"./Link-Dex6LQne.js";import"./usePress-CXS9utKX.js";import"./Separator-Bx9L3kIV.js";import"./Separator-DodoKnoT.js";import"./CollectionBuilder-DBkURgoe.js";import"./Text-DE4Q9wlE.js";import"./EmulatedBoldText-BK7BqSsu.js";import"./Text-s-uJNCfK.js";import"./TextArea-BOcRLaQh.js";import"./TextFieldBase-WFAwlHON.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-uSlQSXhR.js";import"./TextField-Ikioio4Y.js";import"./FieldError-CSYQEfgd.js";import"./Form-BBooAEet.js";import"./Group-DJY0cn_B.js";import"./useTextField-BxOi2WYK.js";import"./useFormReset-BDGpTE2A.js";import"./ReactAriaControlledValueFix-BHN5aKS1.js";import"./LoadingSpinner-CTxNA6YP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-0E_exH3L.js";import"./ContextMenuSection-DOSMoV2f.js";import"./Dialog--6GRJbyV.js";import"./Collection-DxypVpmd.js";import"./SearchField-DAJQjktq.js";import"./useEvent-CgmVVSAd.js";import"./SelectionManager-u7tMSqsB.js";import"./useCollator-YHcMoLBN.js";import"./FocusScope-CzMQYsxZ.js";import"./VisuallyHidden-C_bZjV4d.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},a={args:{isDisabled:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(u,{children:"Message"})})}),r.jsx("br",{}),r.jsx(P,{type:"submit",children:"Submit"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(u,{children:"Message"})})},l={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(u,{children:"Message"})}),r.jsx(P,{type:"button",onClick:h,children:"Set focus"})]})}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,M,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
