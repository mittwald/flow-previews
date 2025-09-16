import{j as r}from"./iframe-d9P-aV0W.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-BjZlRYlZ.js";import{L as m}from"./Link-BeeXtlZl.js";import{H as s}from"./HeaderNavigation-D4OJOZx9.js";import{B as o}from"./Button-B1lQe4CG.js";import{T as p}from"./Text-Be7zee3C.js";import{I as C}from"./Image-BLj5vaUH.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DoQEMUH2.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DwlwlXS3.js";import"./ContextMenuSection-B_Ps-rhF.js";import{a as D,M as E}from"./Modal-C1qPmVoq.js";import{H as G}from"./Heading-1328N8LH.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-COJEgxrC.js";import"./mergeRefs-COfeY-J9.js";import"./index-DNfeWXBl.js";import"./useLocalizedStringFormatter-BD0NOEPb.js";import"./context-3d2O_dpD.js";import"./utils-D3Cd9kCb.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CdPHlHdZ.js";import"./useFocus-Db-Axcue.js";import"./useFocusRing-CufwTJs4.js";import"./useFocusable-CU14CpV2.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BMYPjKuf.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DwY3a-D1.js";import"./ProgressBar-Sdd768YE.js";import"./Label-Dkt1SH7U.js";import"./Hidden-ATL9oYS4.js";import"./useLabel-DJC774kJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-7zjo9sS-.js";import"./EmulatedBoldText-DaFZXsc7.js";import"./Text-D1KGOeak.js";import"./AlertIcon-DyxnpmLa.js";import"./Action-DTIHrutw.js";import"./context-DNdMdfyQ.js";import"./useStatic-BCruP98g.js";import"./getActionGroupSlot-CwmqcSpm.js";import"./Popover-DPVZXXeh.js";import"./DialogTriggerView-FP1ivMgD.js";import"./Dialog-e74qD_EA.js";import"./RSPContexts-CIfamJXM.js";import"./OverlayArrow-Cjv7HVcg.js";import"./useControlledState-CiRgye4r.js";import"./Collection-CdCCPlVo.js";import"./CollectionBuilder-DsV7XKjH.js";import"./Separator-p90sXtPP.js";import"./Group-DNqxyc_c.js";import"./SearchField-CGJ3SG_G.js";import"./FieldError-DZyu-lh_.js";import"./Form-D0Rr0MG7.js";import"./useTextField-BsPcuE2q.js";import"./useFormReset-BRhy_R9s.js";import"./TextField-CBm_F67z.js";import"./useEvent-BUfOZTC1.js";import"./SelectionManager-CdLcEL5b.js";import"./useCollator-D1fE0zhK.js";import"./FocusScope-Bqouiiv6.js";import"./VisuallyHidden-D6ugaIjO.js";import"./Switch-Cp8y0ZPL.js";import"./Label-Bkj4txtc.js";import"./useToggleState-Dn3BRejd.js";import"./Overlay-FgPMXWVy.js";import"./ButtonView-CZuAcorV.js";import"./Heading-DqhKHwH3.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Xr as default};
