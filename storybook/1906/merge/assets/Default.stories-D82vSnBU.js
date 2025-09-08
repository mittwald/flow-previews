import{j as e,r as O}from"./iframe-CB_IvR8I.js";import{L as s}from"./Label-DQjiInKi.js";import{F as o}from"./FileField-CuEjSdYq.js";import{B as t}from"./Button-B6pH5E7T.js";import{S as A}from"./Section-ChgdckCA.js";import{F as P}from"./FieldError-COPLGoQY.js";import{F as R}from"./FieldDescription-CzRSGrqM.js";import{O as H,K as k}from"./IconWarning-DHvxn9zQ.js";import{u as G,F as U,t as q}from"./Form-DpTUUNrZ.js";import{A as w}from"./ActionGroup-BUPr_rwT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CQ73sAu4.js";import"./mergeRefs-CSVQQCMz.js";import"./index-dvXJvLk3.js";import"./useLocalizedStringFormatter-BKMvXLmW.js";import"./context-CQpLcUPr.js";import"./Label-kjSyRRrG.js";import"./utils-g_K47B_Q.js";import"./Hidden-jmCIdXP6.js";import"./FormField.module-CqWyJNQI.js";import"./Form-BSDtEK6z.js";import"./useFocus-B0PqsM1A.js";import"./useLabel-DNzpHOuu.js";import"./FieldError-7I8SRRkd.js";import"./Text-B8w1c0_W.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BtoN_DlS.js";import"./useFocusRing-gt8SzE7T.js";import"./browser-CyPw7Cgt.js";import"./Text-C_h1oOw9.js";import"./EmulatedBoldText-B-vVao8K.js";import"./LoadingSpinner-B018WmYG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BNZImaSB.js";import"./ProgressBar-DB_rXcaP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BSSkfFZ6.js";import"./useFocusable-B2StGM5o.js";import"./ContextMenuSection-CCIV1sJL.js";import"./Action-DXrBr-ZU.js";import"./context-B4EC4nRx.js";import"./useStatic-y0oZYxL5.js";import"./getActionGroupSlot-Bj-rdEEm.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-nVDPewl7.js";import"./RSPContexts-PWzkBgmU.js";import"./OverlayArrow-01R9fjkr.js";import"./useControlledState-CS3WyH2d.js";import"./Collection-BYXnLO4u.js";import"./CollectionBuilder-opZAg4uy.js";import"./Separator-Bv7qspKp.js";import"./SearchField-CR8AG0pb.js";import"./useTextField-Dvn-D0Cy.js";import"./useFormReset-DVL0Bkgs.js";import"./TextField-nXjEyJdg.js";import"./useEvent--a1AA2TN.js";import"./SelectionManager-DyWAPqsT.js";import"./useCollator-3DG3Mrdl.js";import"./FocusScope-2f5e0YPn.js";import"./VisuallyHidden-D4WM3JvY.js";/**
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
