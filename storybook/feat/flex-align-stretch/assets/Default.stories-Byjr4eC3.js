import{j as e,r as O}from"./iframe-D5s8HkwO.js";import{L as s}from"./Label-iSiMu1ip.js";import{F as o}from"./FileField-D20gKkE1.js";import{B as t}from"./Button-BqPne1ar.js";import{S as W}from"./Section-BiTnh_UT.js";import{F as H}from"./FieldError-DDxFFvpK.js";import{F as P}from"./FieldDescription-DzlT8Yl_.js";import{A as R,_ as G}from"./IconWarning-BXD0iv1k.js";import{u as U,F as k,t as q}from"./Form-BQ2HFYsX.js";import{A as w}from"./ActionGroup-BamI91_B.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BCJdYZuQ.js";import"./mergeRefs-vd2X_irL.js";import"./index-DQy1KAPI.js";import"./useLocalizedStringFormatter-Dib9oUr8.js";import"./context-BRoJySMC.js";import"./Label-DFio2qHv.js";import"./utils-CSEH-j9T.js";import"./Hidden-DtltZqKg.js";import"./FormField.module-B9AzUSUD.js";import"./Form-DSTVN1kq.js";import"./useFocus-ChgCHlwF.js";import"./useLabel-Bmfvdk3t.js";import"./FieldError-ZxKBib3w.js";import"./Text-BD_PegNR.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-3Yn7tMQf.js";import"./useFocusRing-0N6EWJVX.js";import"./browser-CypciHn-.js";import"./Text-Cmu5-2wY.js";import"./EmulatedBoldText-CCMYCjn2.js";import"./LoadingSpinner-D7Ym_un6.js";import"./Button-DfwJ262K.js";import"./ProgressBar-D_TjSuLE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CLLKaLvj.js";import"./useFocusable-aHoAMXnZ.js";import"./ContextMenuSection-BxLe66M-.js";import"./Action--P7vblN7.js";import"./context-CrUoHIHV.js";import"./useStatic-CLN3_XSs.js";import"./getActionGroupSlot-C2Wzm-yy.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BzKhW82W.js";import"./RSPContexts-BHdKUx20.js";import"./OverlayArrow-CjUQq1PN.js";import"./useControlledState-Cw_CbRo5.js";import"./Collection-BZqkTnip.js";import"./CollectionBuilder-Czv49dlB.js";import"./Separator-DaEegn0m.js";import"./SearchField-8k7gExLP.js";import"./Group-DmJZ2m4p.js";import"./useTextField-BHSza5rw.js";import"./useFormReset-CQNUsXCF.js";import"./TextField-Cuvjdg2-.js";import"./SelectionManager-DA0jAVfs.js";import"./useEvent-D5-EaqKz.js";import"./useCollator-Bhx7w4gU.js";import"./FocusScope-DbtYTQ61.js";import"./VisuallyHidden-WLO0QMJU.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(W,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(W,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var I,g,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var _,A,D;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(A=u.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const Ze=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Ze as __namedExportsOrder,Xe as default};
