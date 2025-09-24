import{j as r,r as H}from"./iframe-CqlVwSqw.js";import{M as t}from"./MarkdownEditor-DP7pUNKY.js";import{L as l}from"./Label-WgiBu-Dj.js";import{F as K}from"./FieldError-Cyj__5dL.js";import{u as N,F as U,a as Y}from"./Form-C_Odkr89.js";import{B as g}from"./Button-OTaF8oie.js";import{S as G}from"./Section-cFGMqHWs.js";import"./Markdown-BsMiUt5Q.js";import"./CodeBlock-CkWmiwVk.js";import"./clsx-B-dksMZM.js";import"./CopyButton-kgaaKu07.js";import"./IconWarning-CQ60jK8P.js";import"./PropsContextProvider-BuREg09C.js";import"./mergeRefs-Cx0s-cU7.js";import"./index-BuKaDIt4.js";import"./Tooltip-DfqVeZis.js";import"./ClearPropsContextView-C3Bv20Xw.js";import"./useFocus-qWrFSXYF.js";import"./ProgressBar-B0gZeOOM.js";import"./utils-B7PoWZoE.js";import"./Label-CpU_ziWP.js";import"./Hidden-tYtqWYMe.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-B6FfxehJ.js";import"./context-QfY8Pr6d.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DZt2Tj7Y.js";import"./useFocusable-BReVx9rr.js";import"./useFocusRing-DLxcniMF.js";import"./react-children-utilities-BMayZTp2.js";import"./Action-BP4V_Ghr.js";import"./context-CxE1sBmK.js";import"./useStatic-BR1_jZPV.js";import"./browser-D8TCc1uG.js";import"./getActionGroupSlot-DdOlkyEE.js";import"./dynamic-BWXPpint.js";import"./useLocalizedStringFormatter-BiVzy_IK.js";import"./Heading-DgHdlda3.js";import"./Heading-Derm1hNn.js";import"./RSPContexts-C439z8nI.js";import"./InlineCode-Cmw2UFIw.js";import"./Link-Bwg2SkAq.js";import"./usePress-5TW4P5t1.js";import"./Separator-CABtYxoh.js";import"./Separator-PuUe3HZt.js";import"./CollectionBuilder-EuTbufj2.js";import"./Text-CQKhljzJ.js";import"./EmulatedBoldText-C871-J_1.js";import"./Text-BcRGqQ7g.js";import"./TextArea-DVaEEULB.js";import"./TextFieldBase-BZQyOmLI.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DeDryt5w.js";import"./TextField-BmXGUsbn.js";import"./FieldError-CjaQ5IB_.js";import"./Form-Ce3Yvr6A.js";import"./Group-DKePUrRV.js";import"./useTextField-g_oQkODH.js";import"./useFormReset-DOLEs5qD.js";import"./ReactAriaControlledValueFix-DILG8OeD.js";import"./useManagedValue-C5d-cc0S.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-3xwEonu_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-2nj66ItS.js";import"./ContextMenuSection-DZkdAbKV.js";import"./Popover-BBrX7Bk6.js";import"./DialogTriggerView-BZ0wf3vM.js";import"./FocusScope-Bgk9tnAX.js";import"./useCollator-CpH_e3F2.js";import"./VisuallyHidden-leZhq3qV.js";import"./Collection-DMTTSBS8.js";import"./SearchField-C2GAQJuB.js";import"./useEvent-Bpofckl7.js";import"./SelectionManager-BUQAScfd.js";import"./Switch-DmT08Svi.js";import"./useToggleState-DDXcGrX6.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(E=(S=n.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var F,j,w;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(w=(j=a.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var R,C,L;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var k,W,B;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(B=(W=m.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var v,O,_;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(_=(O=p.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var D,y,I;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
        <Button onPress={() => form.reset()}>Reset</Button>
      </Form>;
  }
}`,...(I=(y=c.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var z,P,T;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...(T=(P=d.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var V,q,A;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const Se=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange","WithRef"];export{s as Default,n as Disabled,p as Resizeable,i as ShowCharacterCount,m as WithFieldError,c as WithForm,a as WithLabel,d as WithOnChange,u as WithRef,Se as __namedExportsOrder,Me as default};
