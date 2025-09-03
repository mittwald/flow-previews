import{j as r}from"./iframe-Bi2SfRmV.js";import{M as o}from"./MarkdownEditor-CfpEWW9y.js";import{L as W}from"./Label-Bf2ieprX.js";import{F as B}from"./FieldError-CmL2Tr0U.js";import{u as I,F as y,a as z}from"./Form-B5qWMYwg.js";import{B as V}from"./Button-D5Xd0LEq.js";import"./Markdown-D-oSrGie.js";import"./CodeBlock-CJhCcdAS.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DnD4yWNd.js";import"./IconWarning-Bplgov_i.js";import"./PropsContextProvider-DaoyFYJY.js";import"./mergeRefs-DG37ux9F.js";import"./index-BPrHKF6N.js";import"./Tooltip-BpXMmldY.js";import"./utils-Dxcmwd9a.js";import"./OverlayArrow-B-xht0if.js";import"./useFocus-C-Ng-ghT.js";import"./ProgressBar-Dobb74j3.js";import"./Label-HBAOkOC5.js";import"./Hidden-B9tBmOSG.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-A5VLCzVG.js";import"./context-BhsUJEB9.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CIKoypYK.js";import"./useFocusable-CoivSZnS.js";import"./useFocusRing-Cut0-bC1.js";import"./react-children-utilities-D5bqwuZg.js";import"./Action-C4D1p-D4.js";import"./context-BL-ZIP9s.js";import"./useStatic-DCDW6go-.js";import"./browser-B5YnOpHr.js";import"./getActionGroupSlot-CbuIGg6y.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-BS293wUk.js";import"./Heading-CkWKlntd.js";import"./Heading-C5bxiFeF.js";import"./RSPContexts-SSRv2tEc.js";import"./InlineCode-nH6Yze3k.js";import"./Link-C2A0Cdv9.js";import"./usePress-BC_RRwfM.js";import"./Separator-ucZJ7f47.js";import"./Separator-D9zMzSnu.js";import"./CollectionBuilder-DhC4o9GF.js";import"./Text-BBB4yGC-.js";import"./EmulatedBoldText-B38Yfz1K.js";import"./Text-CkSKd-Z_.js";import"./TextArea-BAT4GrUZ.js";import"./TextFieldBase-QRWhEv0X.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-UVUQlGhH.js";import"./TextField-Cs62mBed.js";import"./FieldError-BIS3uJRl.js";import"./Form-B_Pu4x7F.js";import"./Group-CNmX4nS8.js";import"./useTextField-CloIwySk.js";import"./useFormReset-BRME98Hv.js";import"./ReactAriaControlledValueFix-Dy_Ld-FZ.js";import"./LoadingSpinner-ClEMvWD9.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D6XrWsvH.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const v=I({defaultValues:{message:"Hello!"}});return r.jsxs(y,{form:v,onSubmit:async O=>q(O.message),children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
