import{j as e,r as k}from"./iframe-MIRc1tgM.js";import{L as s}from"./Label-6ip-YDAK.js";import{F as o}from"./FileField-yfMgT09J.js";import{B as t}from"./Button-JGTIxpZE.js";import{S as H}from"./Section-vX5v4wZz.js";import{F as G}from"./FieldError-DXgvjoE9.js";import{F as U}from"./FieldDescription-B7e-UXQa.js";import{O as q,K as w}from"./IconWarning-0xUxCYxJ.js";import{u as K,F as M,t as N}from"./Form-CnYaB6E2.js";import{A as T}from"./ActionGroup-DBi__7rY.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D0cKELyM.js";import"./index-nYe53ytP.js";import"./index-Bluht812.js";import"./useLocalizedStringFormatter-DiG2EdIp.js";import"./context-7dZHwnb1.js";import"./Label-BZ6fLiSQ.js";import"./utils-Wg8-dAbi.js";import"./Hidden-CQtTG736.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-BwYj4c-E.js";import"./useFocus-D5-sLX53.js";import"./FieldError-CET0Lp84.js";import"./Text-CqfOq6kd.js";import"./filterDOMProps-CghfNOdR.js";import"./Input-Dq9_JaMk.js";import"./useFocusRing-BXtZEpMW.js";import"./browser-D2aBH95U.js";import"./Text-DB0aA-4n.js";import"./EmulatedBoldText-tFsrQfu_.js";import"./LoadingSpinner-DiZJo45g.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Bb1_Qr-8.js";import"./ProgressBar-DSHI0B5V.js";import"./useLabel-BYf9ahG7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BoYI9IsN.js";import"./useFocusable-42wCCaNx.js";import"./ContextMenuSection-T61eJ4bk.js";import"./Action-C4w8f-qm.js";import"./context-B5ID5FgA.js";import"./useStatic-4IAJfawn.js";import"./getActionGroupSlot-DN8d2K7y.js";import"./dynamic-C-bCBCeB.js";import"./Popover-D6qyKu9r.js";import"./DialogTriggerView-BBSm9KQL.js";import"./RSPContexts-TWbyIvJO.js";import"./ClearPropsContextView-BJ9mJsVp.js";import"./useControlledState-hbnLpfLJ.js";import"./FocusScope-CO7KUiC3.js";import"./useCollator-ChtnueVT.js";import"./VisuallyHidden-hT4NoAo3.js";import"./Collection-BF9KVqKC.js";import"./CollectionBuilder-gc2XqGfN.js";import"./context-gIAWaTnY.js";import"./Separator-CwF2l7Tl.js";import"./SelectionManager-Bb0sVVLv.js";import"./useEvent-C__VA96B.js";import"./ControlledNotification-DAn0r14w.js";import"./Switch-CTyi_YgO.js";import"./useToggleState-xo7F0lbz.js";import"./useFormReset-BLfHAfi4.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],z=q("outline","paperclip","Paperclip",Y),{action:J}=__STORYBOOK_MODULE_ACTIONS__,sr={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},Q=J("submit"),l={},c={args:{isReadOnly:!0}},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(U,{children:"Supported formats: .pem, .pfx"})]})},m={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(G,{children:"File too large"})]})},d={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(w,{children:e.jsx(z,{})})})})},u={render:r=>{const[n,a]=k.useState(null),i=n==null?void 0:n[0];return e.jsxs(H,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},F={render:()=>{var a,i;const r=K(),n=N();return e.jsx(M,{form:r,onSubmit:Q,children:e.jsxs(H,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(T,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var f,h,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,j,b;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(b=(j=c.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var y,B,v;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var g,C,L;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var I,O,_;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var E,R,D;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    const file = files?.[0];
    return <Section>
        <FileField {...props} isInvalid onChange={setFiles}>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
        </FileField>
        {file?.name}
      </Section>;
  }
}`,...(D=(R=u.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var W,A,P;F.parameters={...F.parameters,docs:{...(W=F.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileField multiple>
              <Label>Certificate</Label>
              <Button variant="outline" color="secondary">
                Select
              </Button>
            </FileField>
          </Field>
          {form.watch("file")?.[0]?.name}
          <ActionGroup>
            <Button type="submit">Upload</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...(P=(A=F.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const ar=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,d as IconButton,c as ReadOnly,p as WithDescription,m as WithError,u as WithHandler,F as WithReactHookForm,ar as __namedExportsOrder,sr as default};
