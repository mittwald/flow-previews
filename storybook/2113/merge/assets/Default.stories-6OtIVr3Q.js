import{r as x,j as e}from"./iframe-cN7Lzdqj.js";import{K as t,s as u}from"./Modal-BvOAVp6n.js";import{S as F}from"./Section-DYu4NkMo.js";import{F as f,d as g}from"./FileCardList-Dra2QlnJ.js";import{u as S,F as C,t as D}from"./Form-zS2RouYP.js";import"./ResetButton-BMtkxiIc.js";import{B as s}from"./Button-BwVoLe8A.js";import{A as y}from"./ActionGroup-DX4E3UwM.js";import{_ as j,$ as O}from"./IconWarning-CUvGDlf1.js";import{H as h}from"./Heading-D9z7iTpY.js";import{T as b}from"./Text-BAPm9zxH.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-DQRqFpn-.js";import"./flowComponent-ClNnNn_u.js";import"./index-CXWzxOff.js";import"./index-Bef0Wflz.js";import"./context-dEL8T1DH.js";import"./Button-BpQqb0nf.js";import"./utils-Dbx-ArCm.js";import"./ProgressBar-CMrNr0Rm.js";import"./Hidden-By4OwLil.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B7YjNia1.js";import"./useFocusRing-Q59ju1-g.js";import"./useFocusable-DoOUadEO.js";import"./RSPContexts-ClDg08BX.js";import"./Collection-r0rjmb-q.js";import"./CollectionBuilder-_LjgOwmd.js";import"./SelectionIndicator-C0yq45Os.js";import"./Separator-UtafTuzR.js";import"./browser-Bpxr7vqL.js";import"./useLocalizedStringFormatter-18qmqoa4.js";import"./useStatic-DPvlriRj.js";import"./LoadingSpinner-CTzp-c3F.js";import"./Flex-BoyQ6jvg.js";import"./Accordion-BMxO4mcN.js";import"./Alert-DRm0M_-I.js";import"./AlertIcon-C-ExwOqO.js";import"./AlertBadge-CfRun1E8.js";import"./Align-IxMmEPNd.js";import"./Avatar-C0Asp2HI.js";import"./AvatarStack-BoJnhU26.js";import"./BigNumber-CuAdmGiQ.js";import"./Breadcrumb-BkaPZxVT.js";import"./Link-oX3ddIiA.js";import"./Legend-DfNTsat6.js";import"./Color-BKlRe18i.js";import"./TableFooterRow-NzFJ-M5U.js";import"./SkeletonText-DVQeD1Fq.js";import"./Content-D9H_HcvI.js";import"./Label-DyuE6_xN.js";import"./CounterBadge-BMowvMS6.js";import"./DonutChart-Dcix-a4p.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C8aSHTlq.js";import"./Header-Cqwjc9TR.js";import"./Image-BlZiNNFc.js";import"./Initials-igV7Y7XO.js";import"./InlineCode-xANS0eJt.js";import"./LayoutCard-DaNXTyxD.js";import"./Separator-BbfT4Xvo.js";import"./MessageSeparator-DrM4lDRk.js";import"./NavigationGroup-B6pE0lML.js";import"./Notification-CgZQ9wbr.js";import"./NotificationProvider-CkbZ2iuD.js";import"./ControlledNotification-D1FOQGyy.js";import"./ProgressBar-C5OsEuon.js";import"./Rating-Bdupu4iU.js";import"./Skeleton-BvnGctBd.js";import"./EmulatedBoldText-BFt1sMFF.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,Ne={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(h,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(F,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(f,{children:[...i.watch("file")??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    accept: "image/png"
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconImage />
          <Heading>Drop image</Heading>
          <Text>Only image/png images are allowed.</Text>
          <FileField name="file" onChange={setFiles}>
            <Button>Select image</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconUpload />
          <Heading>Drop files</Heading>
          <FileField name="file" onChange={setFiles}>
            <Button>Select files</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
              <IconUpload />
              <Heading>Drop file</Heading>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </FileDropZone>
          </Field>
          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};const Pe=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Pe as __namedExportsOrder,Ne as default};
