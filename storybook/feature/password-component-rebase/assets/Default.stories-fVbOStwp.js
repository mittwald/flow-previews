import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BdpSHsi2.js";import{o as B,p as H,j as S,q as v,r as C}from"./IconWarning-CyJsJ4s2.js";import{L as m}from"./Link-7G_g0iGt.js";import{H as s}from"./HeaderNavigation-e3AoNrB1.js";import{B as o}from"./Button-C1dNkanO.js";import{T as p}from"./Text-BnT9pmDe.js";import{I as L}from"./Image-_YYgre_t.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-DqLxzrj5.js";import{a as b,C as D,M as c}from"./ContextMenuContent-Dhq4CuV3.js";import"./ContextMenuSection-CqhrtcbY.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-CcUF_gSI.js";import{H as W}from"./Heading-CJymgL7Y.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CwsjuOpO.js";import"./mergeRefs-DCHnGnoY.js";import"./iframe-BSAIfxFq.js";import"./index-d29qW9Ar.js";import"./index-lEnnwJps.js";import"./useLocalizedStringFormatter-CQZe-1oI.js";import"./utils-CGBbld1I.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-KHE_7Dyp.js";import"./useFocus-CrOIx9qr.js";import"./useFocusRing-voAwBIMi.js";import"./useFocusable-CeEllLln.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CcHxumCi.js";import"./Button-QGm5fJ3f.js";import"./ProgressBar-DVHZMV_Y.js";import"./Label-C3wuJWVC.js";import"./Hidden-RoZfe91Z.js";import"./useLabel-2PTTjRTo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-cxnoU24n.js";import"./react-children-utilities-DvaK_N8_.js";import"./AlertIcon-DomwX5oi.js";import"./Action-C2knT7-L.js";import"./context-Be5-R6KO.js";import"./useStatic-BvhlQpOK.js";import"./getActionGroupSlot-DpZDuh2a.js";import"./Popover-nmCzyZgj.js";import"./OverlayTrigger--ulk67hi.js";import"./Dialog-DR27fcja.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-BDH2is-P.js";import"./useControlledState-B-V-WRDl.js";import"./Collection-CfN95BI8.js";import"./CollectionBuilder-DWO952CO.js";import"./Separator-CuUYeIPG.js";import"./SelectionManager-DA0mbM8D.js";import"./useEvent-BleeV9lU.js";import"./useCollator-DIkGalmP.js";import"./FocusScope-CVefUuHc.js";import"./VisuallyHidden-BgU4cU5T.js";import"./DialogTriggerView-CLrJGBpq.js";import"./Switch-Dkdhh5Lx.js";import"./Label-YD0WPdje.js";import"./useToggleState-D4vbPM1Z.js";import"./useFormReset-DAKGIyMh.js";import"./Overlay-B021Pj_0.js";import"./Header-DaFVdGtz.js";import"./ButtonView-C60rj0tz.js";import"./Heading-DCNnB3YY.js";const oo={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},a={args:{color:"dark"},parameters:{backgrounds:A}},i={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(M=(f=a.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,k,T;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(T=(k=i.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const to=["Default","WithContextMenu","Dark","Light"];export{a as Dark,t as Default,i as Light,e as WithContextMenu,to as __namedExportsOrder,oo as default};
