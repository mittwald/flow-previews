import{j as r,r as H}from"./iframe-QYa5fCvd.js";import{M as t}from"./MarkdownEditor-BSPzc93T.js";import{L as l}from"./Label-REb55_aV.js";import{F as K}from"./FieldError-DIhpKsfz.js";import{u as N,F as U,a as Y}from"./Form-DcoODqVz.js";import{B as g}from"./Button-DtEggira.js";import{S as G}from"./Section-DfsoS9tc.js";import"./Markdown-M5BfllNx.js";import"./CodeBlock-IU8_zwed.js";import"./clsx-B-dksMZM.js";import"./CopyButton-YFRkPZ71.js";import"./IconWarning-DEqdDiS_.js";import"./PropsContextProvider-DqxlNqTv.js";import"./mergeRefs-CbLIukJ0.js";import"./index-Dd17el8U.js";import"./Tooltip-DdW_BUs2.js";import"./ClearPropsContextView-DF7vfwc8.js";import"./useFocus-D2QZKYlR.js";import"./ProgressBar-BeUyRfom.js";import"./utils-lb8KrrIv.js";import"./Label-fRERrzCf.js";import"./Hidden-Py6KbP61.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DR9sPTrv.js";import"./context-BsMul4n4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Bu1M14oY.js";import"./useFocusable-DEca05gc.js";import"./useFocusRing-sLc_Aawe.js";import"./react-children-utilities-CjhE_PVt.js";import"./Action-BQI9QTKN.js";import"./context-NUuZzhZl.js";import"./useStatic-DIir9R4I.js";import"./browser-BNaQCdYt.js";import"./getActionGroupSlot-8GawWr3Y.js";import"./dynamic-BhpRGc-9.js";import"./useLocalizedStringFormatter-CfiFtED0.js";import"./Heading-Dho9wAM0.js";import"./Heading-ghp5YyKn.js";import"./RSPContexts-uNufUlk-.js";import"./InlineCode-C0THDiAm.js";import"./Link-M0xbFHUi.js";import"./usePress-BKI1i-pB.js";import"./Separator-DiVQuES-.js";import"./Separator-CsR4K24c.js";import"./CollectionBuilder-DNb6DOFN.js";import"./Text-D98HT4db.js";import"./EmulatedBoldText-BuggfMa1.js";import"./Text-BD3o8xQb.js";import"./TextArea-DQ83ZpZz.js";import"./TextFieldBase-CUcG1Nye.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-qfycfnRL.js";import"./TextField-DYh5UApz.js";import"./FieldError-BGtuYqZa.js";import"./Form-BOiG0M1T.js";import"./Group-BKMRBfUs.js";import"./useTextField-gTkvMWQG.js";import"./useFormReset-DzIk_Opn.js";import"./ReactAriaControlledValueFix-C2f91eDD.js";import"./useManagedValue-DZE8M0n3.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-DKDkxF6a.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-u3ZYuRRI.js";import"./ContextMenuSection-BNRXmqNj.js";import"./Popover-BojVT5-a.js";import"./DialogTriggerView-DucWr1Mr.js";import"./FocusScope-ByQquqFt.js";import"./useCollator-EfErOZQE.js";import"./VisuallyHidden-B3sifiz6.js";import"./Collection-DAGhelkx.js";import"./SearchField-BY7ftgY4.js";import"./useEvent-D3g7XMTk.js";import"./SelectionManager-yhE4bEMZ.js";import"./Switch-58030LT7.js";import"./useToggleState-CGSsvXtE.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
