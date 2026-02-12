import{j as r}from"./iframe-jPI25t47.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-D8uDJDej.js";import{L as m}from"./Link-ChzTXjZ1.js";import{H as s}from"./HeaderNavigation-DjjFg2Zl.js";import{B as o}from"./Button-CMdL10Ys.js";import{T as p}from"./Text-CzRKl4Rn.js";import{I as h}from"./Image-DsIMfJjl.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Dib0tgWN.js";import{C as M,M as c}from"./MenuItem-BEDM8Fl9.js";import{C as I}from"./ContextMenuTrigger-CqGtIJpw.js";import"./ContextMenuSection-BG427zDb.js";import{M as T}from"./ModalTrigger-CSHBGpdu.js";import{M as k}from"./Modal-CdjOxPJU.js";import{H}from"./Heading-BYBgSNBh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-NWkTmrxz.js";import"./index-Cv1Y71KG.js";import"./index-mBlsDuvj.js";import"./remote-B_as-6Bm.js";import"./useLocalizedStringFormatter-DiGz--zc.js";import"./context-yJg27e0-.js";import"./utils-DssEHlsW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DZAeMhz-.js";import"./usePress-Bv9bKc9w.js";import"./useFocusRing-PgP7-E1A.js";import"./useFocusable-YzLAhItH.js";import"./dynamic-DcvTJJQa.js";import"./LoadingSpinner-DhHtGG23.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-GVmiAxmL.js";import"./ProgressBar-BB7XDz1a.js";import"./Label-gIBQebAF.js";import"./Hidden-BHJ1gGty.js";import"./useLabel-CJgKbpp_.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BKdBfXKE.js";import"./EmulatedBoldText-BPBEsAY6.js";import"./Text-BUiBuDRU.js";import"./AlertIcon-HKJqs1Pu.js";import"./ActionBatch-DVEQdHps.js";import"./useOverlayController-Cy5LcSUF.js";import"./useStatic-Be080qZz.js";import"./getActionGroupSlot-Dnhmurp_.js";import"./Popover-BMY2UlYP.js";import"./OverlayContextProvider-BkQ_ixfe.js";import"./Dialog-C4XHiXzR.js";import"./RSPContexts-COITpNJr.js";import"./OverlayArrow-2srpU7pW.js";import"./useControlledState-CujVadxA.js";import"./Collection-D3v-sdZg.js";import"./CollectionBuilder-AJ1JuT2m.js";import"./SelectionIndicator-SHoPDQ8G.js";import"./Separator-DfJMhgbG.js";import"./SelectionManager-C-0YEkIp.js";import"./useEvent-DZfip6aA.js";import"./useCollator-TV1MmAHK.js";import"./FocusScope-QARcb0VX.js";import"./VisuallyHidden-vrC_Lu36.js";import"./Switch-GsveyXV-.js";import"./useFieldComponent-CHdLkU8r.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B1STqCKF.js";import"./useFormReset-DGTIvKtn.js";import"./OverlayTrigger-DoiiNK8E.js";import"./DialogTriggerView-DT88Z-vz.js";import"./Overlay-BMoI33va.js";import"./ButtonView-quZyuTrS.js";import"./Flex-DvdXj1RM.js";import"./Heading-BvtnHnmW.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const wr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,wr as __namedExportsOrder,qr as default};
