import{j as r,r as H}from"./iframe-CqRNQciv.js";import{M as t}from"./MarkdownEditor-BUpkHswO.js";import{L as l}from"./Label-B1-MUuXM.js";import{F as K}from"./FieldError-5_HnQqyB.js";import{u as N,F as U,a as Y}from"./Form-BLVDMc4-.js";import{B as g}from"./Button-BQVO0si3.js";import{S as G}from"./Section-B9cjUc-u.js";import"./Markdown-BkmPcPmX.js";import"./CodeBlock-C39xw7Di.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CSsEDfhJ.js";import"./IconWarning-Byt1rMjk.js";import"./PropsContextProvider-BQfe9ict.js";import"./mergeRefs-ClD3ZqgW.js";import"./index-BklbjYgM.js";import"./Tooltip-BHa3vk0D.js";import"./utils-CDZvBAhZ.js";import"./OverlayArrow-DyqT2ErN.js";import"./useFocus-C23Lw-eJ.js";import"./ProgressBar-BcNp5lkE.js";import"./Label-D-Urwdt3.js";import"./Hidden-B2J6qN6V.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-B8y4VsiL.js";import"./context-DEliiBST.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CM_u9bSJ.js";import"./useFocusable-Bbxq5z2c.js";import"./useFocusRing-B0f1J6LY.js";import"./react-children-utilities-Dh7vPxtw.js";import"./Action-atfzbcNo.js";import"./context-BVMhSMnq.js";import"./useStatic-DY1i4yNR.js";import"./browser-DF98vWDx.js";import"./getActionGroupSlot-CoRCewfO.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-Ctan4lLb.js";import"./Heading-CQg1SG_l.js";import"./Heading-D9MkxIpz.js";import"./RSPContexts-Cux7rZ-z.js";import"./InlineCode-IvQzZHgU.js";import"./Link-vZo3h5bB.js";import"./usePress-Qa0Hjq2B.js";import"./Separator-CcYtgChP.js";import"./Separator-DooYmmOD.js";import"./CollectionBuilder-C5f-xul0.js";import"./Text-BmM8CnJX.js";import"./EmulatedBoldText-Dxetj7v-.js";import"./Text-DPg2upf1.js";import"./TextArea-Bja9NeNA.js";import"./TextFieldBase-Dk4KoXVv.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BWOf38H6.js";import"./TextField-Bz3Bvh6E.js";import"./FieldError-DSIOhjbk.js";import"./Form-B_ua98af.js";import"./Group-BjCh3wTR.js";import"./useTextField-mA3ppTq3.js";import"./useFormReset-1xQ2Hjo2.js";import"./ReactAriaControlledValueFix-BnQPfuJn.js";import"./useManagedValue-Byoaa_vM.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-B7q__8zb.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Cp6wFlJh.js";import"./ContextMenuSection-CDigFLUn.js";import"./Dialog-D7VtK-4A.js";import"./Collection-p1kezi7h.js";import"./SearchField-CmWplFkj.js";import"./useEvent-QhZz2GUM.js";import"./SelectionManager-BZWRaM2c.js";import"./useCollator-DR7vJXcv.js";import"./FocusScope-1rZ1gxhZ.js";import"./VisuallyHidden-CgIcH36Q.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,fe={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const xe=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange","WithRef"];export{s as Default,n as Disabled,p as Resizeable,i as ShowCharacterCount,m as WithFieldError,c as WithForm,a as WithLabel,d as WithOnChange,u as WithRef,xe as __namedExportsOrder,fe as default};
