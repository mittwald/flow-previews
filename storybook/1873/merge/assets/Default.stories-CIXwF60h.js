import{j as r}from"./iframe-BwuZESNl.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-WAZUP-Ct.js";import{L as m}from"./Link-B9hJkRqz.js";import{H as s}from"./HeaderNavigation-DM3ZMH6O.js";import{B as o}from"./Button-C-_knNCH.js";import{T as p}from"./Text-DpTMi7Hm.js";import{I as C}from"./Image-By8O0UPK.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BT_3CYgS.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BIBsH3TR.js";import"./ContextMenuSection-DjFLgsAY.js";import{a as D,M as G}from"./Modal-GEfGiyKB.js";import{H as E}from"./Heading-DHkvDNzw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BusDQUVZ.js";import"./mergeRefs-Dzw8-qaC.js";import"./index-BsghocK6.js";import"./useLocalizedStringFormatter-CzmxkLVc.js";import"./context-Bl9z0-Ez.js";import"./utils-DwFj3dGQ.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CLzpZvIT.js";import"./useFocus-Co7EWAzt.js";import"./useFocusRing-CS-U_0il.js";import"./useFocusable-CJY6BQME.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-Cad6y9w3.js";import"./Button-DTlvpG2l.js";import"./ProgressBar-DWIeEB0n.js";import"./Label-Dt17YKxE.js";import"./Hidden-B4snL9ZX.js";import"./useLabel-Cozlv_-X.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BKpgmdP8.js";import"./EmulatedBoldText-CFTp_0vf.js";import"./Text-BwbgPKEG.js";import"./AlertIcon-DPN8k0Dn.js";import"./Action-Bt7uXbM9.js";import"./context-X7aiLuFr.js";import"./useStatic-B6vMCsEx.js";import"./getActionGroupSlot-D2B53nCF.js";import"./Popover-CDL__2cK.js";import"./DialogTriggerView-CDdW0IZG.js";import"./Dialog-C5G24GfN.js";import"./RSPContexts-B82SnKIX.js";import"./OverlayArrow-Ct_bakog.js";import"./useControlledState-DDCrWfj9.js";import"./Collection-BUR6CQUz.js";import"./CollectionBuilder-MbnL1jCD.js";import"./Separator-x7E6VMeq.js";import"./Group-DZ7V6HJS.js";import"./SearchField-Cldn6FRa.js";import"./FieldError-DYnYqKIj.js";import"./Form-DMd5Q7rx.js";import"./useTextField-DPMhYcJW.js";import"./useFormReset-BKxc7BR_.js";import"./TextField-CAE6yhWA.js";import"./useEvent-D4npkP0f.js";import"./SelectionManager-BpegylfK.js";import"./useCollator-D-5CGuzZ.js";import"./FocusScope-CjFTNvkQ.js";import"./VisuallyHidden-H0mCENoD.js";import"./Switch-D4IL-p9U.js";import"./Label-Bp0IrURb.js";import"./useToggleState-DyiFsGWy.js";import"./Overlay-MCGGXuh-.js";import"./Header-MH_o417z.js";import"./ButtonView-CRchzgOG.js";import"./Heading-BH8n_JJv.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};
