import{j as r}from"./iframe-Budb-7am.js";import{M as o}from"./MarkdownEditor-vA8J04i7.js";import{L as W}from"./Label-DzBJxL-G.js";import{F as B}from"./FieldError-YXSjvpRj.js";import{u as I,F as y,a as z}from"./Form-DEfLTd7k.js";import{B as V}from"./Button-DlmJA7gy.js";import"./Markdown-CBtGG0OD.js";import"./CodeBlock-BEfH2er8.js";import"./clsx-B-dksMZM.js";import"./CopyButton-hFNQgEzZ.js";import"./IconWarning-DHwZhMPm.js";import"./PropsContextProvider-HNH7RKnU.js";import"./mergeRefs-BTIKDTd_.js";import"./index-BpM7E2Cn.js";import"./Tooltip-oXcYRGEv.js";import"./utils-BvIm0V7l.js";import"./OverlayArrow-DviLC0jr.js";import"./useFocus-Pkimm2oK.js";import"./ProgressBar-CfQlEPzK.js";import"./Label-RM_Po7kI.js";import"./Hidden-ldu86gX3.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-TSCdqSxt.js";import"./context-CJMSS7cd.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-SkoShBYt.js";import"./useFocusable-CC21Us72.js";import"./useFocusRing-Dpjm87_-.js";import"./react-children-utilities-CJJFVOoR.js";import"./Action-B12Ua1Cm.js";import"./context-BsbU81yG.js";import"./useStatic-DaioOtN4.js";import"./browser-DtJAwUnv.js";import"./getActionGroupSlot-_4HxksMv.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-CybNj2CY.js";import"./Heading-DfxA-4WF.js";import"./Heading-CwvqAa5X.js";import"./RSPContexts-Tr5byqnH.js";import"./InlineCode-BKijw4d_.js";import"./Link-CiaRLzGZ.js";import"./usePress-loP-J0cx.js";import"./Separator-B_yp2154.js";import"./Separator-D8RFWE6v.js";import"./CollectionBuilder-goJFEW7Y.js";import"./Text-1Vh0OzT8.js";import"./EmulatedBoldText-os5LgzLJ.js";import"./Text-3Ba5r2Ha.js";import"./TextArea-CSQafYe_.js";import"./TextFieldBase-Dke5YmSV.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-6ByGRMUQ.js";import"./TextField-BONCp9nZ.js";import"./FieldError--Cn4xsFj.js";import"./Form-DC4Rz7ax.js";import"./Group-DBRwONdh.js";import"./useTextField-B5KjZWGb.js";import"./useFormReset-Y1wMMKwI.js";import"./ReactAriaControlledValueFix-BoadMls3.js";import"./LoadingSpinner-akPoSbp3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DjLWq9Wn.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const v=I({defaultValues:{message:"Hello!"}});return r.jsxs(y,{form:v,onSubmit:async O=>q(O.message),children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
