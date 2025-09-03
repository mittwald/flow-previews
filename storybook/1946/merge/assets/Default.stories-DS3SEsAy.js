import{j as r}from"./iframe-B9WJ5iKj.js";import{M as o}from"./MarkdownEditor-DMSh2HUn.js";import{L as W}from"./Label-Txm3TZUN.js";import{F as B}from"./FieldError-BOUOKYBY.js";import{u as I,F as y,a as z}from"./Form-CZL4xkFP.js";import{B as V}from"./Button-D_a9cGts.js";import"./Markdown-BDiRTXlW.js";import"./CodeBlock-DIGxLFFj.js";import"./clsx-B-dksMZM.js";import"./CopyButton-C0xlgqkC.js";import"./IconWarning-iA3abBs4.js";import"./PropsContextProvider-CGbAkxa2.js";import"./mergeRefs-DdPqSpPT.js";import"./index-DKUVlu-x.js";import"./Tooltip-CmQ1HOCN.js";import"./utils-DB8fltME.js";import"./OverlayArrow-CE7drKv_.js";import"./useFocus-hMfli9CJ.js";import"./ProgressBar-C1_1cHyi.js";import"./Label-D_4wO_RK.js";import"./Hidden-DsQKnrr0.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-oUVSUbln.js";import"./context-B6-GkfV2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DqBsJvcb.js";import"./useFocusable-uW0l0Nx0.js";import"./useFocusRing-BfWSMilO.js";import"./react-children-utilities-Cv2jxGK0.js";import"./Action-BKjYIDhz.js";import"./context-WaClvBnE.js";import"./useStatic-oaWlYVrV.js";import"./browser-BOk1fb3_.js";import"./getActionGroupSlot-DpnJzbbM.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-DFSg5pkm.js";import"./Heading-BA4dFWVo.js";import"./Heading-ir8hZIQC.js";import"./RSPContexts-CDVdjyBw.js";import"./InlineCode-BhYNC8d0.js";import"./Link-DXQkeCmn.js";import"./usePress-Cwd9gmzr.js";import"./Separator-Cgfh3K8k.js";import"./Separator-dmjViTlK.js";import"./CollectionBuilder-C14ghNrk.js";import"./Text-CSPzXI-q.js";import"./EmulatedBoldText-C7rcw5Ry.js";import"./Text-COQnmlIw.js";import"./TextArea-BbillsSQ.js";import"./TextFieldBase-ge8cjgbc.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BeSAjbke.js";import"./TextField-DKiK_bQe.js";import"./FieldError-DavyfSHK.js";import"./Form-FBD95hlW.js";import"./Group-Cz3tZ_vF.js";import"./useTextField-CTUt_DB_.js";import"./useFormReset-X7y3l5xq.js";import"./ReactAriaControlledValueFix-BPmbd47m.js";import"./LoadingSpinner-BLFdik4W.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BgiaEGOw.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const v=I({defaultValues:{message:"Hello!"}});return r.jsxs(y,{form:v,onSubmit:async O=>q(O.message),children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
