import{j as e,r as O}from"./iframe-xv1hkYrp.js";import{L as s}from"./Label-DC7JJJSp.js";import{F as o}from"./FileField-DfnIKoja.js";import{B as t}from"./Button-CxiqmFwG.js";import{S as A}from"./Section-DTE4txpl.js";import{F as P}from"./FieldError-BheKx6KK.js";import{F as R}from"./FieldDescription-BGM9sp4N.js";import{O as H,K as k}from"./IconWarning-0FGrLhxS.js";import{u as G,F as U,t as q}from"./Form-HXOxhIxL.js";import{A as w}from"./ActionGroup-DWEksD63.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B9OcsNR0.js";import"./mergeRefs-BFH3kKHm.js";import"./index-Dm2Ajy-S.js";import"./useLocalizedStringFormatter-UiX65Yuj.js";import"./context-D4r7bTNU.js";import"./Label-mG8fBsu4.js";import"./utils-CpTHh5rs.js";import"./Hidden-BDDDKiVs.js";import"./FormField.module-CqWyJNQI.js";import"./Form-B-L3i4zG.js";import"./useFocus-CfLpRQBT.js";import"./useLabel-BR4zi6f8.js";import"./FieldError-wrM_YjD9.js";import"./Text-B_3Y_Nze.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-B3GwFloQ.js";import"./useFocusRing-CU0aNGGs.js";import"./browser-lwEiR5fW.js";import"./Text-DbY3Cuep.js";import"./EmulatedBoldText-CmD3aEdd.js";import"./LoadingSpinner-DFWWTIAT.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BusXuZI0.js";import"./ProgressBar-DjfrTOAa.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-o1s-vRpH.js";import"./useFocusable-CwWDG3DW.js";import"./ContextMenuSection-fN3hiiSx.js";import"./Action-DwAWbs1F.js";import"./context-DBtsHmqs.js";import"./useStatic-Cda7hAFV.js";import"./getActionGroupSlot-hBdF3hkn.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-Xvd99Udq.js";import"./RSPContexts-DH2vWQTy.js";import"./OverlayArrow-CUApfZDY.js";import"./useControlledState-BbRhH2Ee.js";import"./Collection-DSqVCN8E.js";import"./CollectionBuilder-Dvvc79MD.js";import"./Separator-qRXs74hc.js";import"./SearchField-BwU0-hd2.js";import"./useTextField-CIdmu9LD.js";import"./useFormReset-B-Mz2laO.js";import"./TextField-D3hWr_Bw.js";import"./useEvent-CaWXSKpr.js";import"./SelectionManager-DH9lj--q.js";import"./useCollator-IG_dykuZ.js";import"./FocusScope-BxH26lbn.js";import"./VisuallyHidden-CfqgoXLS.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],M=H("outline","paperclip","Paperclip",K),{action:N}=__STORYBOOK_MODULE_ACTIONS__,Ze={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},T=N("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(R,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(k,{children:e.jsx(M,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=G(),n=q();return e.jsx(U,{form:r,onSubmit:T,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var b,B,v;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var y,C,L;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var I,g,_;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(_=(g=d.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var E,D,W;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(W=(D=u.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const $e=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,$e as __namedExportsOrder,Ze as default};
