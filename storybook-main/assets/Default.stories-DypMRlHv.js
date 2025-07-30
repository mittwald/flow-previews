import{j as e,r as O}from"./iframe-Cs4u3jai.js";import{L as s}from"./Label-B0Y8PcLC.js";import{F as o}from"./FileField-Ca1d0_lQ.js";import{B as t}from"./Button-Djxd_lPT.js";import{S as A}from"./Section-D85z0B10.js";import{F as H}from"./FieldError-Wsj8Agfe.js";import{F as P}from"./FieldDescription-DtCbknnc.js";import{C as R,_ as G}from"./IconWarning-0BVBVXS4.js";import{u as U,F as k,t as q}from"./Form-Cd-S2oed.js";import{A as w}from"./ActionGroup-PzeTeugG.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DyrLVIsu.js";import"./mergeRefs-DcFlLbGV.js";import"./index-DwmW63z3.js";import"./useLocalizedStringFormatter-D4NA580S.js";import"./context-BvTQ7OVQ.js";import"./Label-S4RmJPV5.js";import"./utils-vclj1Qm2.js";import"./Hidden-CdwQ6yqP.js";import"./FormField.module-B9AzUSUD.js";import"./Form-D6x5jYca.js";import"./useFocus-ClAUtHT6.js";import"./useLabel-BkGcoVJa.js";import"./FieldError-3wBrWCfg.js";import"./Text-B7UIaBOw.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Uo6LargV.js";import"./useFocusRing-BLMln0L2.js";import"./browser-BbmE0SWg.js";import"./Text-BBeTGXmh.js";import"./EmulatedBoldText-Wf0lwtn6.js";import"./LoadingSpinner-C_G5gUEJ.js";import"./Button-x10lnAMQ.js";import"./ProgressBar-BneW9jxU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BSD3tvTg.js";import"./useFocusable-BN_CcrEu.js";import"./ContextMenuSection-BFLvvtcx.js";import"./Action-XTvpAmRi.js";import"./context-BVRdILhz.js";import"./useStatic-qxHK3Mia.js";import"./getActionGroupSlot-Kd7a9PPP.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-C6Y-YQl5.js";import"./RSPContexts-BOo-h-N-.js";import"./OverlayArrow-BnL8IPkJ.js";import"./useControlledState-D-JQKTrH.js";import"./Collection-Bxbbk1lS.js";import"./CollectionBuilder-DJiQAvza.js";import"./Separator-CA1KhONo.js";import"./SearchField-AfdpK6Ve.js";import"./useTextField-CQf7PcN9.js";import"./useFormReset-u7ab4fFg.js";import"./TextField-Dg5MZqjY.js";import"./useEvent-Cx7qitQN.js";import"./SelectionManager-DjDhbl_H.js";import"./useCollator-BvHyoRqD.js";import"./FocusScope-FJ_dmtXb.js";import"./VisuallyHidden-BT36-Qvg.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var C,y,L;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(L=(y=m.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var I,g,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var _,D,W;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(D=u.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const Xe=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Xe as __namedExportsOrder,Ve as default};
