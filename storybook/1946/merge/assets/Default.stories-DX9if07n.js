import{j as r}from"./iframe-CmZc2bqi.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-B3Gp2u9T.js";import{L as m}from"./Link-DzALUBni.js";import{H as s}from"./HeaderNavigation-CPkJc5xM.js";import{B as o}from"./Button-VEnTPgt_.js";import{T as p}from"./Text-COKPMQN9.js";import{I as C}from"./Image-vC8HSiy8.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CZPZwotV.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BTAM5tWl.js";import"./ContextMenuSection-DbG-yGQ4.js";import{a as D,M as E}from"./Modal-CJr2vjx-.js";import{H as G}from"./Heading-jBmmk78O.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dzg9xpLh.js";import"./mergeRefs-rrkuZ5lZ.js";import"./index-EhdKi2rO.js";import"./useLocalizedStringFormatter-DzGub7xE.js";import"./context-Cw7k38tl.js";import"./utils-fQLXfhJQ.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DHN_pdfM.js";import"./useFocus-DY4K5Od-.js";import"./useFocusRing-sPcGsq2F.js";import"./useFocusable-D9qZqDJ-.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CdGxMhIP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CwlwACKZ.js";import"./ProgressBar-CSln1win.js";import"./Label-CpNDP5E5.js";import"./Hidden-BSO18HGs.js";import"./useLabel-CtvvIYui.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Cqy7wjuz.js";import"./EmulatedBoldText-B0pwgNBL.js";import"./Text-Bx1XUj_S.js";import"./AlertIcon-CFfJOhAm.js";import"./Action-BaBKTXIj.js";import"./context-BhzXq7hi.js";import"./useStatic-UpaM-E4a.js";import"./getActionGroupSlot-D29IUdc4.js";import"./Popover-Brwgt09W.js";import"./DialogTriggerView-Devfp8nk.js";import"./Dialog-C8j6vy7m.js";import"./RSPContexts-BZzxK-gf.js";import"./OverlayArrow-DglMoI2B.js";import"./useControlledState-CRvbu7Hz.js";import"./Collection-DjdIGVi0.js";import"./CollectionBuilder-CnF6WRcM.js";import"./Separator-7rE_vwQ_.js";import"./Group-BrnlYKy2.js";import"./SearchField-CHmOEpRX.js";import"./FieldError-CDojZsJo.js";import"./Form-DSe96I0y.js";import"./useTextField-yJLMliYt.js";import"./useFormReset-sUUVL5Mg.js";import"./TextField-B6Lvx4B_.js";import"./useEvent-Bt3Pdp32.js";import"./SelectionManager-Bx2-6Dwl.js";import"./useCollator-auH5hY6V.js";import"./FocusScope-CVBsChQR.js";import"./VisuallyHidden-BIaD2K_8.js";import"./Switch-XzNhnCSk.js";import"./Label-BwVK-4Jy.js";import"./useToggleState-DxcUUV8_.js";import"./Overlay-Bb9qfQNZ.js";import"./ButtonView-BuzvrWl8.js";import"./Heading-UoTH87If.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
