import{j as r}from"./iframe-Djw2qN4N.js";import{M as o}from"./MarkdownEditor-D7W_7WL6.js";import{L as W}from"./Label-DW829cz7.js";import{F as B}from"./FieldError-Dy-AF12R.js";import{u as I,F as y,a as z}from"./Form-hrWuMNL-.js";import{B as V}from"./Button-DbUzlGPh.js";import"./Markdown-B3NMk6Mh.js";import"./CodeBlock-D-oLn0CS.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DIAbxBAn.js";import"./IconWarning-CGeyKArL.js";import"./PropsContextProvider-CTcixsmb.js";import"./mergeRefs-wyRtFOcD.js";import"./index-BTrHPcFI.js";import"./Tooltip-C1zH3A51.js";import"./utils-DHksHmrI.js";import"./OverlayArrow-BC79QONy.js";import"./useFocus-qvLuoihW.js";import"./ProgressBar-jq0-4j1i.js";import"./Label-BqIGEZIR.js";import"./Hidden-CQXH1kLj.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cdum_nIm.js";import"./context-SMG2uflK.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-3RrKoOGV.js";import"./useFocusable-C2MDV8K7.js";import"./useFocusRing-zh24oNHk.js";import"./react-children-utilities-XBwC9SQJ.js";import"./Action-U7vDxNUW.js";import"./context-D5-d9F9A.js";import"./useStatic-DLgn7tpr.js";import"./browser-CF3hFWtX.js";import"./getActionGroupSlot-jleWxawA.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-A4R3Jnzo.js";import"./Heading-CEZ2AJaG.js";import"./Heading-B7P3iAP_.js";import"./RSPContexts-BWg1RNKY.js";import"./InlineCode-C7AXyUEj.js";import"./Link-C2b0Iizq.js";import"./usePress-DmhdXdf4.js";import"./Separator-DIAu2EJa.js";import"./Separator-_-XVNxdO.js";import"./CollectionBuilder-nkz2VjEe.js";import"./Text-N2Xlqf-I.js";import"./EmulatedBoldText-CB7N4Qe6.js";import"./Text-wW5QNV-A.js";import"./TextArea-BcqdZHAt.js";import"./TextFieldBase-BHvmj5E5.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-B7A8YDcc.js";import"./TextField-CI5mY1Ro.js";import"./FieldError-CaVGVfZY.js";import"./Form-fQWPP7Lo.js";import"./Group-CPAHFVqL.js";import"./useTextField-YfVJ_Q8A.js";import"./useFormReset-Ciz8aHP_.js";import"./ReactAriaControlledValueFix-bJtcDsVa.js";import"./LoadingSpinner-DRHSwImm.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Cmn8DEd4.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const v=I({defaultValues:{message:"Hello!"}});return r.jsxs(y,{form:v,onSubmit:async O=>q(O.message),children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,x,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(F=(x=a.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var f,w,E;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var M,S,j;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(j=(S=m.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var L,C,k;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(k=(C=n.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var R,_,D;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    const form = useForm({
      defaultValues: {
        message: "Hello!"
      }
    });
    return <Form form={form} onSubmit={async v => action(v.message)}>
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
}`,...(D=(_=p.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const Jr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm"];export{s as Default,t as Disabled,n as Resizeable,i as ShowCharacterCount,m as WithFieldError,p as WithForm,a as WithLabel,Jr as __namedExportsOrder,Gr as default};
