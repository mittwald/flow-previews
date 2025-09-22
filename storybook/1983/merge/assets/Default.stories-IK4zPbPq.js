import{j as r,r as H}from"./iframe-CTVhNlXB.js";import{M as t}from"./MarkdownEditor-DANBqeSD.js";import{L as l}from"./Label-BH61eOAw.js";import{F as K}from"./FieldError-CUzLiqhG.js";import{u as N,F as U,a as Y}from"./Form-DtVe-xPb.js";import{B as g}from"./Button-dCi6y-L9.js";import{S as G}from"./Section-SPLzJ3i7.js";import"./Markdown-BSBAQlgt.js";import"./CodeBlock-DwMA_G3C.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DaqekhrN.js";import"./IconWarning-DczNnEus.js";import"./PropsContextProvider-BdKgywzy.js";import"./mergeRefs-HXCFtCCZ.js";import"./index-B0CJcMgs.js";import"./Tooltip-9nx3qbvB.js";import"./ClearPropsContextView-mfz5hcjJ.js";import"./useFocus-B_Alw_Kd.js";import"./ProgressBar-CFHcvSgt.js";import"./utils-DolbARJ8.js";import"./Label-BzU31htm.js";import"./Hidden-CCSOhlCd.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cu4D06kD.js";import"./context-OLvSZRNo.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-L5KsJeFF.js";import"./useFocusable-DI6rxpio.js";import"./useFocusRing-BklgwE0b.js";import"./react-children-utilities-Cy_ywrKS.js";import"./Action-Du5VgD8q.js";import"./context-C7a-dRgh.js";import"./useStatic-DGBPTsqJ.js";import"./browser-DlHr08AR.js";import"./getActionGroupSlot-W2GZrEk6.js";import"./dynamic-DKLrnrux.js";import"./useLocalizedStringFormatter-BRqbPR-6.js";import"./Heading-0AC12sSW.js";import"./Heading-BJNMdoAY.js";import"./RSPContexts-dwc2BRmP.js";import"./InlineCode-CBsfqNOz.js";import"./Link-CqLA0dqy.js";import"./usePress-By95yFbD.js";import"./Separator-meYNAcja.js";import"./Separator-BvYvyYPM.js";import"./CollectionBuilder-CiesGU-z.js";import"./Text-BLo0dekR.js";import"./EmulatedBoldText-YiQdYmo2.js";import"./Text-Mnh5Jpbt.js";import"./TextArea-Cg4eDPbl.js";import"./TextFieldBase-pIslO9Zl.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-d0lfKbrQ.js";import"./TextField-CCmvbP69.js";import"./FieldError-Db2L6cd5.js";import"./Form-BPrp3nIT.js";import"./Group-BvpcRFuc.js";import"./useTextField-S5PdSn0a.js";import"./useFormReset-E2HVy4kF.js";import"./ReactAriaControlledValueFix-BOm2ADcy.js";import"./useManagedValue-C2L2DeKk.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-DJM9ERHN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D-RdbR2Z.js";import"./ContextMenuSection-BskBABq7.js";import"./Popover-CVq2IpQ_.js";import"./DialogTriggerView-Bcwx9J50.js";import"./FocusScope-DSxBaVHz.js";import"./useCollator-CEh5JEF4.js";import"./VisuallyHidden-oOW_UkZ8.js";import"./Collection-DZ2C53It.js";import"./SearchField-BNsFe36r.js";import"./useEvent-Th5L4n2g.js";import"./SelectionManager-e7sW0Ylz.js";import"./Switch-BpyON7pt.js";import"./useToggleState-BBZtxwEi.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
