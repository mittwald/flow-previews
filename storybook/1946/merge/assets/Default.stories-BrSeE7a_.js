import{j as r}from"./iframe-CmZc2bqi.js";import{M as o}from"./MarkdownEditor-C6ixNs7G.js";import{L as v}from"./Label-BwVK-4Jy.js";import{F as B}from"./FieldError-Gbiq2Jvf.js";import{u as I,F as y,a as z}from"./Form-CUc5wgEI.js";import{B as V}from"./Button-VEnTPgt_.js";import"./Markdown-DE96wctd.js";import"./CodeBlock-7xoYyqM8.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Ewloo5F4.js";import"./IconWarning-B3Gp2u9T.js";import"./PropsContextProvider-Dzg9xpLh.js";import"./mergeRefs-rrkuZ5lZ.js";import"./index-EhdKi2rO.js";import"./Tooltip-DrVx69g9.js";import"./utils-fQLXfhJQ.js";import"./OverlayArrow-DglMoI2B.js";import"./useFocus-DY4K5Od-.js";import"./ProgressBar-CSln1win.js";import"./Label-CpNDP5E5.js";import"./Hidden-BSO18HGs.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CtvvIYui.js";import"./context-Cw7k38tl.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CRvbu7Hz.js";import"./useFocusable-D9qZqDJ-.js";import"./useFocusRing-sPcGsq2F.js";import"./react-children-utilities-D9gnl48I.js";import"./Action-BaBKTXIj.js";import"./context-BhzXq7hi.js";import"./useStatic-UpaM-E4a.js";import"./browser-Cqy7wjuz.js";import"./getActionGroupSlot-D29IUdc4.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-DzGub7xE.js";import"./Heading-jBmmk78O.js";import"./Heading-UoTH87If.js";import"./RSPContexts-BZzxK-gf.js";import"./InlineCode-CQsg6ZgG.js";import"./Link-DzALUBni.js";import"./usePress-DHN_pdfM.js";import"./Separator-BBexJc1f.js";import"./Separator-7rE_vwQ_.js";import"./CollectionBuilder-CnF6WRcM.js";import"./Text-COKPMQN9.js";import"./EmulatedBoldText-B0pwgNBL.js";import"./Text-Bx1XUj_S.js";import"./TextArea-Deo3yHvA.js";import"./TextFieldBase-By2iiico.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CMUXt3N5.js";import"./TextField-B6Lvx4B_.js";import"./FieldError-CDojZsJo.js";import"./Form-DSe96I0y.js";import"./Group-BrnlYKy2.js";import"./useTextField-yJLMliYt.js";import"./useFormReset-sUUVL5Mg.js";import"./ReactAriaControlledValueFix-CaMzqfLp.js";import"./LoadingSpinner-CdGxMhIP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CwlwACKZ.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(v,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const d=I({defaultValues:{message:""}});return r.jsxs(y,{form:d,onSubmit:async O=>{q(O.message),d.reset()},children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(v,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var c,l,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,f,F;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(F=(f=a.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var w,E,M;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(M=(E=i.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var S,j,L;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(L=(j=m.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var C,k,R;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(R=(k=n.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var _,D,W;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
      </Form>;
  }
}`,...(W=(D=p.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const Jr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm"];export{s as Default,t as Disabled,n as Resizeable,i as ShowCharacterCount,m as WithFieldError,p as WithForm,a as WithLabel,Jr as __namedExportsOrder,Hr as default};
