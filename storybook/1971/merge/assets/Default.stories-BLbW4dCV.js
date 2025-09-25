import{j as r,r as H}from"./iframe-DaY0X55-.js";import{M as t}from"./MarkdownEditor-BOX6T4fj.js";import{L as l}from"./Label-DBJBtDhT.js";import{F as K}from"./FieldError-B-BsJ3J5.js";import{u as N,F as U,a as Y}from"./Form-CwHYHJ1f.js";import{B as g}from"./Button-DR2yamsk.js";import{S as G}from"./Section-DRtmAM1v.js";import"./Markdown-C9Wdx-Wq.js";import"./CodeBlock-C3hF-EVZ.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D2w1YLs3.js";import"./IconWarning-DpKTVHID.js";import"./PropsContextProvider-BZ-4M9Xw.js";import"./mergeRefs-BGErXhtl.js";import"./index-BnzNbbtM.js";import"./Tooltip--JwiwHra.js";import"./ClearPropsContextView-ubuzjFUL.js";import"./useFocus-Bx9r-om_.js";import"./ProgressBar-feyz4V57.js";import"./utils-BNq2bbe-.js";import"./Label-Y108Eoku.js";import"./Hidden-BWevpR0h.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-5zgngJXY.js";import"./context-C83_ciAo.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-ChlOye-e.js";import"./useFocusable-DsZq_5Zr.js";import"./useFocusRing-vJ8fdZaU.js";import"./react-children-utilities-Kkl1i_Jr.js";import"./Action-Dwh6hg15.js";import"./context-By-CGifB.js";import"./useStatic-uS-e-hBF.js";import"./browser-DCXXMZF1.js";import"./getActionGroupSlot-CD_4vSTY.js";import"./dynamic-BrkEgl8o.js";import"./useLocalizedStringFormatter-D4QinFaA.js";import"./Heading-CM6Z5yBF.js";import"./Heading-CJpl4-5c.js";import"./RSPContexts-DzPn71fZ.js";import"./InlineCode-B5QjecU3.js";import"./Link-B8JitQjc.js";import"./usePress-C0_kEahO.js";import"./Separator-BuLP9UTH.js";import"./Separator-B-P32e-W.js";import"./CollectionBuilder-r4GPnu41.js";import"./Text-ClBV1PzQ.js";import"./EmulatedBoldText-NGGT27hA.js";import"./Text-CmOgQYod.js";import"./TextArea-Dd4dO01O.js";import"./TextFieldBase-DgDLWNa6.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CtMWmXTu.js";import"./TextField-CrD7kLQK.js";import"./FieldError-B2eDKzT7.js";import"./Form-C_YqGgE4.js";import"./Group-BRma_Z3w.js";import"./useTextField-ChCqJFCV.js";import"./useFormReset-Cfy0Tx0G.js";import"./ReactAriaControlledValueFix-t0msjNL2.js";import"./useManagedValue-D_oFruug.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-L8q-c8wY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BFtXZvnQ.js";import"./ContextMenuSection-BODKwBXC.js";import"./Popover-CX1cowkX.js";import"./DialogTriggerView-Bf1Z1A17.js";import"./FocusScope-BkSA93dQ.js";import"./useCollator-0HaIqY_5.js";import"./VisuallyHidden-BYSFBZbq.js";import"./Collection-BNCGMhbn.js";import"./SearchField-BRBjfrRR.js";import"./useEvent-CVZyjoEr.js";import"./SelectionManager-22HKkmij.js";import"./Switch-Clv7PjHW.js";import"./useToggleState-BIgXbakK.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
