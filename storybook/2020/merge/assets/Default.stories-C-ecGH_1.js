import{j as r,r as H}from"./iframe-BEnK-FWT.js";import{M as t}from"./MarkdownEditor-aP_mo7n7.js";import{L as l}from"./Label-jTnCUURY.js";import{F as K}from"./FieldError-BuJc9GYO.js";import{u as N,F as U,a as Y}from"./Form-OB_na3YK.js";import{B as g}from"./Button-Du_IXIsC.js";import{S as G}from"./Section-JAnPv3Yh.js";import"./index-Cun1SEai.js";import"./Markdown-DlgeHLrj.js";import"./CodeBlock-BdkNlFRX.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DWPWwyw1.js";import"./IconWarning-Du8jrWof.js";import"./flowComponent-DvB_ZVBE.js";import"./index-BPBs0lX7.js";import"./index-DmntYai2.js";import"./Tooltip-DIk1ugDQ.js";import"./ClearPropsContextView-F9DsjkX8.js";import"./utils-HuzRHECM.js";import"./OverlayArrow-CtuVQXhz.js";import"./useFocus-DNN1vAkK.js";import"./ProgressBar-VOq4RT67.js";import"./Label-DpqaIvZR.js";import"./Hidden-B8h_3GWf.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DH4gBFQn.js";import"./context-B1E8CUSR.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-M8qHyrFf.js";import"./useFocusable-B7vzQveK.js";import"./useFocusRing-Bx80huIr.js";import"./react-children-utilities-DgtJwUVJ.js";import"./Action-Dje9lihP.js";import"./context-BV6G6ZUO.js";import"./useStatic-B4Kccozc.js";import"./browser-CXszXSov.js";import"./getActionGroupSlot-W7A_YSpc.js";import"./dynamic-DjJiwxiO.js";import"./useLocalizedStringFormatter-DxstFItm.js";import"./Heading-CM2cHxtn.js";import"./Heading-BLcTsrbo.js";import"./RSPContexts-BUhaye_C.js";import"./InlineCode-DcJeuphr.js";import"./Link-UbWnZjFN.js";import"./usePress-BT-0Cvdy.js";import"./Separator-Cy_zxqLh.js";import"./Separator-Cp8WNBkf.js";import"./CollectionBuilder-BHVjkzb6.js";import"./Text-DfapAs8s.js";import"./EmulatedBoldText-DzLnbGXm.js";import"./Text-pg5s_iHF.js";import"./TextArea-BTd6IemX.js";import"./TextFieldBase-ID_q4LH3.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CxSMNnGp.js";import"./TextField-BoBwO4B-.js";import"./FieldError-BHfIYnvw.js";import"./context-C5-mMKGT.js";import"./Form-B4lJ4F2B.js";import"./Group-CMYFByMY.js";import"./Input-D7T6tVMZ.js";import"./useTextField-GOqjTl_D.js";import"./useFormReset-UhEuFSE1.js";import"./useFormValidation-CaI2qlPb.js";import"./ReactAriaControlledValueFix-C1kT0Js9.js";import"./useManagedValue-C1t3efRM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-BRr-XCzk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CDOmUSXw.js";import"./ContextMenuSection-DnHVIOni.js";import"./Dialog-CDa_BhSJ.js";import"./Collection-BOkVQ-64.js";import"./SelectionManager-C9W_dvum.js";import"./useEvent-CuOy2IQf.js";import"./useCollator-B8pGQ6dk.js";import"./FocusScope-CIlgtdEP.js";import"./VisuallyHidden-uM_MQnLf.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,Se={title:"Form Controls/MarkdownEditor",component:t,args:{placeholder:"Write a message..."},render:e=>r.jsx(t,{...e})},s={},n={args:{isDisabled:!0}},a={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(t,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(K,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},c={render:e=>{const o=N({defaultValues:{message:""}});return r.jsxs(U,{form:o,onSubmit:async h=>{J(h.message),o.reset()},children:[r.jsx(Y,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(t,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(g,{type:"submit",children:"Submit"}),r.jsx(g,{onPress:()=>o.reset(),children:"Reset"})]})}},d={render:e=>r.jsx(t,{...e,onChange:o=>console.log(o),children:r.jsx(l,{children:"Message"})})},u={render:e=>{const o=H.useRef(null),h=()=>{o.current&&o.current.focus()};return r.jsxs(G,{children:[r.jsx(t,{...e,ref:o,children:r.jsx(l,{children:"Message"})}),r.jsx(g,{type:"button",onClick:h,children:"Set focus"})]})}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var M,S,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const Ee=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange","WithRef"];export{s as Default,n as Disabled,p as Resizeable,i as ShowCharacterCount,m as WithFieldError,c as WithForm,a as WithLabel,d as WithOnChange,u as WithRef,Ee as __namedExportsOrder,Se as default};
