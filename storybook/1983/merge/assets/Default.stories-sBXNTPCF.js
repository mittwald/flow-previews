import{j as r,r as H}from"./iframe-C41GO6P6.js";import{M as t}from"./MarkdownEditor-DjzxpRVD.js";import{L as l}from"./Label-BmUyaMI1.js";import{F as K}from"./FieldError-DxG-LHoh.js";import{u as N,F as U,a as Y}from"./Form-DfG2V2ai.js";import{B as g}from"./Button-EU7ZCBUb.js";import{S as G}from"./Section-kaw1-Ecj.js";import"./Markdown-GRPCQn2F.js";import"./CodeBlock-4tin8NpK.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Ce780Qt1.js";import"./IconWarning-C5RwbqDR.js";import"./PropsContextProvider-BlE6VFtE.js";import"./mergeRefs-Hgr2X06A.js";import"./index-D__hiUrI.js";import"./Tooltip-q22yRv_3.js";import"./ClearPropsContextView-CpAffOzl.js";import"./useFocus-CcyM5uvG.js";import"./ProgressBar-BdICdwMW.js";import"./utils-Be5F4DcQ.js";import"./Label-I71uq1jB.js";import"./Hidden-COug4O8x.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel--RfYT5XW.js";import"./context-Om8YW_Qo.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-D2xxPiTl.js";import"./useFocusable-DyjaqCu5.js";import"./useFocusRing-DXsfSaAZ.js";import"./react-children-utilities-DSphdVCU.js";import"./Action-DU6nM0zW.js";import"./context-1RA5jvOs.js";import"./useStatic-DHBtTVNq.js";import"./browser-DspoMTVt.js";import"./getActionGroupSlot-BqgUIaia.js";import"./dynamic-DxnCaHhV.js";import"./useLocalizedStringFormatter-DK3NG-Ma.js";import"./Heading-DJ1QGBtr.js";import"./Heading-DSFKQ-67.js";import"./RSPContexts-B6QAlzIf.js";import"./InlineCode-DpITmxoB.js";import"./Link-Bg3EwyrC.js";import"./usePress-DSqdD5KI.js";import"./Separator-zJGL-W6j.js";import"./Separator-CWruQEFN.js";import"./CollectionBuilder-DOOsEd3G.js";import"./Text-BYSgteT5.js";import"./EmulatedBoldText-CJIUXOgz.js";import"./Text-Bnb73OL0.js";import"./TextArea-9KVXtJW4.js";import"./TextFieldBase-B3oAhElk.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DhiOcCPR.js";import"./TextField-DApuMKmH.js";import"./FieldError-qUs-TTn2.js";import"./Form-DZUJdQjd.js";import"./Group-celsVWdW.js";import"./useTextField-CQA55vhK.js";import"./useFormReset-DAlqRR2j.js";import"./ReactAriaControlledValueFix-BW-fLwFe.js";import"./useManagedValue-6Bb7qVi8.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-MF8PlszG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DlD3fRGu.js";import"./ContextMenuSection-BlJvGXA9.js";import"./Popover-DEl9axMZ.js";import"./DialogTriggerView-BwB5gCJZ.js";import"./FocusScope-V0DR1oSw.js";import"./useCollator-D5nYlsQq.js";import"./VisuallyHidden-D1Yd7fBj.js";import"./Collection-C5OyY5G9.js";import"./SearchField-BbBM1aCT.js";import"./useEvent-C6r-N21P.js";import"./SelectionManager-ARZMK7nk.js";import"./Switch-CPNMTTop.js";import"./useToggleState-Dbq0WoWL.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
