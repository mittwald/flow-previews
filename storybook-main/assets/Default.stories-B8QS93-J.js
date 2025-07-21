import{j as e,r as O}from"./iframe-p6Bp2Ow-.js";import{L as s}from"./Label-BhgKcmWm.js";import{F as o}from"./FileField-CwmcCfXt.js";import{B as t}from"./Button-BLeGlv8j.js";import{S as W}from"./Section-6dzBO9Hh.js";import{F as H}from"./FieldError-CUHeG-Uy.js";import{F as P}from"./FieldDescription-a6PsZscf.js";import{A as R,_ as G}from"./IconWarning-_xRihr7t.js";import{u as U,F as k,t as q}from"./Form-rEKVmEEP.js";import{A as w}from"./ActionGroup-2L28pbmD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BTW_bpGX.js";import"./mergeRefs-BhA_prJr.js";import"./index-CjBL_wgX.js";import"./useLocalizedStringFormatter-DIJ10SGn.js";import"./context-BreHr6W7.js";import"./Label-zTn1BqTc.js";import"./utils-CnAbB5du.js";import"./Hidden-Bh_0QKLq.js";import"./FormField.module-B9AzUSUD.js";import"./Form-JnaaWtcr.js";import"./useFocus-DgSV50G0.js";import"./useLabel-Db1j6kak.js";import"./FieldError-Drz17t_W.js";import"./Text-Cx3sBrCD.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-CreDFhOd.js";import"./useFocusRing-BMw7ZmRN.js";import"./browser-B4AtpSGe.js";import"./Text-BtmxEKoY.js";import"./EmulatedBoldText-DJP3uLZJ.js";import"./LoadingSpinner-Aq6Gq52o.js";import"./Button-DuvBnjq7.js";import"./ProgressBar-NAttgbiM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dx_e9Euk.js";import"./useFocusable-B_o37Ayh.js";import"./ContextMenuSection-CDQ5retU.js";import"./Action-A5AfYnIu.js";import"./context-B70X11Ud.js";import"./useStatic-3gyrNX_Q.js";import"./getActionGroupSlot-BY1hyZob.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-_gMyH4Hj.js";import"./RSPContexts-D2-zMuP7.js";import"./OverlayArrow-jZ3LH-Hh.js";import"./useControlledState-rcKaJ30A.js";import"./Collection-BslN4fmG.js";import"./CollectionBuilder-0vjbF6vR.js";import"./Separator--jTylhFG.js";import"./SearchField-Djq6QHUL.js";import"./Group-U4W79Xdy.js";import"./useTextField-B_B9v3Ja.js";import"./useFormReset-BpxJN7m8.js";import"./TextField-D4rInykg.js";import"./SelectionManager-D33tAYjc.js";import"./useEvent-yXH8ok0I.js";import"./useCollator-DwKmC7HY.js";import"./FocusScope-U7qUa4av.js";import"./VisuallyHidden-DLIZ8dPS.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(W,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(W,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
