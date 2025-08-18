import{j as r}from"./iframe-DqL79zQf.js";import{M as o}from"./MarkdownEditor-BF58R4OY.js";import{L as W}from"./Label-BLSzr0Yv.js";import{F as B}from"./FieldError-Bx1fPtVC.js";import{u as I,F as y,a as z}from"./Form-DhQSQckz.js";import{B as V}from"./Button-QUsEiN5S.js";import"./Markdown-BDmub1aP.js";import"./CodeBlock-zWQ4NqJ9.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Bne-NGaw.js";import"./IconWarning-B2WreSxS.js";import"./PropsContextProvider-CyLvSquV.js";import"./mergeRefs-D6gEpmO4.js";import"./index-7IubYRC5.js";import"./Tooltip-B74HbONf.js";import"./utils-z68HW5Om.js";import"./OverlayArrow-5jZt71m1.js";import"./useFocus-BD5ovWzl.js";import"./ProgressBar-CH989tir.js";import"./Label-CMzThDyg.js";import"./Hidden-BIJxogKe.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BjvlKqLd.js";import"./context-CSgowZ2Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState--BvK6IW4.js";import"./useFocusable-B73WrcgM.js";import"./useFocusRing-CbrFyu86.js";import"./react-children-utilities-DiV8QjlF.js";import"./Action-BupBWbcG.js";import"./context-J1QRUcAO.js";import"./useStatic-iq1b9ojT.js";import"./browser-AVTBNrkm.js";import"./getActionGroupSlot-Baj1oFA-.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-0rSYolxh.js";import"./onlyText-C6rcL9j5.js";import"./Heading-Pzjd5sfY.js";import"./Heading-DZ03YPH_.js";import"./RSPContexts-9NN5zZW2.js";import"./InlineCode-uCnLt_68.js";import"./Link-B4vMiedh.js";import"./usePress-CO3SG6lx.js";import"./Separator-Dfc59foh.js";import"./Separator-DaCZt9C1.js";import"./CollectionBuilder-CvELNXxX.js";import"./Text-M86zJQcf.js";import"./EmulatedBoldText-DYcpE2hW.js";import"./Text-zdoGkENQ.js";import"./TextArea-BTXjTr4O.js";import"./TextFieldBase-BmJwQmuK.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BHFEL7TK.js";import"./TextField-2CLvDbyV.js";import"./FieldError-DNlWKJE8.js";import"./Form-R5LTMmOa.js";import"./Group-DPDytGTQ.js";import"./useTextField-Cpjxci2I.js";import"./useFormReset-CsKPjgKa.js";import"./ReactAriaControlledValueFix-BCNQYcDJ.js";import"./LoadingSpinner-BTTfXDBN.js";import"./Button-BgVR6Xai.js";import"./LiveAnnouncer-CeCcBDbP.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const v=I({defaultValues:{message:"Hello!"}});return r.jsxs(y,{form:v,onSubmit:async O=>q(O.message),children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(D=(_=p.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const Qr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm"];export{s as Default,t as Disabled,n as Resizeable,i as ShowCharacterCount,m as WithFieldError,p as WithForm,a as WithLabel,Qr as __namedExportsOrder,Jr as default};
