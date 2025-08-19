import{j as r}from"./iframe-TjmQ4-hc.js";import{M as o}from"./MarkdownEditor-BkYazQHE.js";import{L as W}from"./Label-_xLVsaVJ.js";import{F as B}from"./FieldError-DnzwKCtL.js";import{u as I,F as y,a as z}from"./Form-CGbkK6YN.js";import{B as V}from"./Button-CjK60Gy6.js";import"./Markdown-DjPhABNr.js";import"./CodeBlock-BNte-WTn.js";import"./clsx-B-dksMZM.js";import"./CopyButton-vodzdDSe.js";import"./IconWarning-1inC7auC.js";import"./PropsContextProvider-mrDLBKOi.js";import"./mergeRefs-mF2yj4e0.js";import"./index-D7o1-TZH.js";import"./Tooltip-NX0olfBj.js";import"./utils-DD1RW9f4.js";import"./OverlayArrow-Dfaoqrsw.js";import"./useFocus-Bp-EL3Xp.js";import"./ProgressBar-BJaRqoq-.js";import"./Label-bbA9jqHU.js";import"./Hidden-30ERZiSw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-d8aoteAS.js";import"./context-R7iXnnvL.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Cdf0eZg6.js";import"./useFocusable-BjM2CItA.js";import"./useFocusRing-D7ZBK5Fy.js";import"./react-children-utilities-CQAWlLmY.js";import"./Action-B2WqKUlH.js";import"./context-Brmjsdqe.js";import"./useStatic-r5kIO8BX.js";import"./browser-CuXK39lt.js";import"./getActionGroupSlot-CibZr1oe.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-CDqIJOhp.js";import"./Heading-Cig5HHsR.js";import"./Heading-WZScnp-T.js";import"./RSPContexts-DCrZu0Mf.js";import"./InlineCode-CKXqOzsY.js";import"./Link-X4gYmyl2.js";import"./usePress-BK59oRjy.js";import"./Separator-BWyF4jBI.js";import"./Separator-CcxH-z50.js";import"./CollectionBuilder-JPu6hEsl.js";import"./Text-B1ccA9_H.js";import"./EmulatedBoldText-CMH1yXpY.js";import"./Text-C2aObJTh.js";import"./TextArea-BKVozr8b.js";import"./TextFieldBase-CdBlibz_.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Cp16D2cG.js";import"./TextField-BMUXjdB8.js";import"./FieldError-Bn62nal0.js";import"./Form-Bwnncz0S.js";import"./Group-9f-8oWvR.js";import"./useTextField-FvWzbSPw.js";import"./useFormReset-CwwzwEJM.js";import"./ReactAriaControlledValueFix-DdZDRweO.js";import"./LoadingSpinner-NnONiqHm.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-ZmvxJ__-.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const v=I({defaultValues:{message:"Hello!"}});return r.jsxs(y,{form:v,onSubmit:async O=>q(O.message),children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
