import{j as r,r as H}from"./iframe-D6MXtoeF.js";import{M as t}from"./MarkdownEditor-C5DRV-Wz.js";import{L as l}from"./Label-DskNCC55.js";import{F as K}from"./FieldError-y6YOgSXV.js";import{u as N,F as U,a as Y}from"./Form-CWVhtDGl.js";import{B as g}from"./Button-Cps8fs86.js";import{S as G}from"./Section-yKZ3j0lj.js";import"./Markdown-CNRuKgKw.js";import"./CodeBlock-BoVUA7OP.js";import"./clsx-B-dksMZM.js";import"./CopyButton-ceGl1nte.js";import"./IconWarning-BzCByWga.js";import"./PropsContextProvider-DKdwmELu.js";import"./mergeRefs-DOKhc8cj.js";import"./index-fKpd1sOg.js";import"./Tooltip-Enwu0eT5.js";import"./utils-B7M3k9FN.js";import"./OverlayArrow-DzYaWuxq.js";import"./useFocus-DFkM6utj.js";import"./ProgressBar-bcTJnrQg.js";import"./Label-BFW3y9SA.js";import"./Hidden-Cmo_PwmO.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D8eXzRI6.js";import"./context-Ck2zuvqd.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CXEx0L1H.js";import"./useFocusable-mpne-nRN.js";import"./useFocusRing-DiO0sb-8.js";import"./react-children-utilities-CSXI4m6v.js";import"./Action-BE7fSEbk.js";import"./context-0wOjLTza.js";import"./useStatic-BOJiZlFD.js";import"./browser-B8Nd9l3q.js";import"./getActionGroupSlot-hiKhMcUy.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-lfwtdpdt.js";import"./Heading-DsViAiwO.js";import"./Heading-D9_UVGue.js";import"./RSPContexts-DRsXlI21.js";import"./InlineCode-DvAHuJyt.js";import"./Link-CeX6_1AI.js";import"./usePress-Ct6Wvp4V.js";import"./Separator-BL4vAeJL.js";import"./Separator-DFJzdh8J.js";import"./CollectionBuilder-C1kbEgCd.js";import"./Text-BFMh0nyW.js";import"./EmulatedBoldText-238cra3f.js";import"./Text-X88WQLD_.js";import"./TextArea-BbFtat90.js";import"./TextFieldBase-DnPjc-Bp.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BnwEgjZt.js";import"./TextField-D8-3KKgU.js";import"./FieldError-DNUFoHGF.js";import"./Form-DWnjCikM.js";import"./Group-DIpddcx2.js";import"./useTextField-Ct6WOc7M.js";import"./useFormReset-a1QiC8fx.js";import"./ReactAriaControlledValueFix-PNMAWQp-.js";import"./useManagedValue-C1HQkvEj.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-BP-swr7r.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-QOiUMIUW.js";import"./ContextMenuSection-DAHajvSv.js";import"./Dialog-DTX65kLp.js";import"./Collection-Cv5VHUKE.js";import"./SearchField-BsFidkN3.js";import"./useEvent-BvqgWnZ6.js";import"./SelectionManager-D5CRlMya.js";import"./useCollator-K4h4KKi7.js";import"./FocusScope-NXX1qwdY.js";import"./VisuallyHidden-B-VJ1Jd7.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,fe={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
